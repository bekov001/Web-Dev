/* eslint-disable no-unused-vars */
// To-Do List Application
// Vanilla JavaScript implementation with DOM manipulation

// DOM elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const totalCountSpan = document.getElementById('totalCount');
const completedCountSpan = document.getElementById('completedCount');
const emptyStateDiv = document.getElementById('emptyState');

// State management
let todos = JSON.parse(localStorage.getItem('todos')) || [];

/**
 * Initialize the application
 */
function init() {
  renderTodos();
  setupEventListeners();
}

/**
 * Setup event listeners for form and delegated events
 */
function setupEventListeners() {
  // Form submission
  todoForm.addEventListener('submit', handleAddTodo);

  // Delegated events for todo items
  todoList.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
      const todoItem = event.target.closest('.todo-item');
      const todoId = parseInt(todoItem.dataset.id, 10);
      toggleTodoComplete(todoId);
    }
  });

  todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
      const todoItem = event.target.closest('.todo-item');
      const todoId = parseInt(todoItem.dataset.id, 10);
      deleteTodo(todoId);
    }

  });
  todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-button')) {
      const todoItem = event.target.closest('.todo-item');
      const todoId = parseInt(todoItem.dataset.id, 10);
      editTodo(todoId);
    }
  });
}

/**
 * Handle adding a new todo item
 * @param {Event} event - The form submission event
 */
function handleAddTodo(event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  // Validate input
  if (!todoText) {
    alert('Please enter a task');
    return;
  }

  // Create new todo object
  const newTodo = {
    id: Date.now(),
    text: todoText,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  // Add to todos array
  todos.push(newTodo);

  // Save to localStorage
  saveTodos();

  // Clear input and render
  todoInput.value = '';
  todoInput.focus();
  renderTodos();
}

/**
 * Toggle the completed status of a todo item
 * @param {number} todoId - The ID of the todo to toggle
 */
function toggleTodoComplete(todoId) {
  const todo = todos.find((item) => item.id === todoId);

  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

/**
 * Delete a todo item
 * @param {number} todoId - The ID of the todo to delete
 */
function deleteTodo(todoId) {
  // Find the index of the todo to delete
  const todoIndex = todos.findIndex((item) => item.id === todoId);

  if (todoIndex > -1) {
    // Remove the todo from the array
    todos.splice(todoIndex, 1);
    saveTodos();
    renderTodos();
  }
}

/**
 * Render all todos to the DOM
 */
function renderTodos() {
  // Clear the todo list
  todoList.innerHTML = '';

  // If no todos, show empty state
  if (todos.length === 0) {
    emptyStateDiv.classList.add('show');
    totalCountSpan.textContent = '0';
    completedCountSpan.textContent = '0';
    return;
  }

  // Hide empty state
  emptyStateDiv.classList.remove('show');

  // Create and append todo items
  todos.forEach((todo) => {
    const todoItem = createTodoElement(todo);
    todoList.appendChild(todoItem);
  });

  // Update stats
  updateStats();
}

/**
 * Create a todo item element
 * @param {Object} todo - The todo object to create element for
 * @returns {HTMLElement} - The created todo item element
 */
function createTodoElement(todo) {
  // Create main container
  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  todoItem.dataset.id = todo.id;

  if (todo.completed) {
    todoItem.classList.add('completed');
  }

  // Create checkbox container
  const checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'checkbox-container';

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  // Create todo text
  const todoText = document.createElement('span');
  todoText.className = 'todo-text';
  todoText.textContent = todo.text;

  // Add checkbox and text to container
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(todoText);


  const editButton = document.createElement('button');
  editButton.type = 'button';
  editButton.className = 'edit-button';
  editButton.textContent = 'Edit';

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';

  // Append all elements to todo item
  todoItem.appendChild(checkboxContainer);
  todoItem.appendChild(deleteButton);
  todoItem.appendChild(checkboxContainer);
  todoItem.appendChild(editButton);
  return todoItem;
}

function editTodo(todoId) {
  const todo = todos.find((item) => item.id === todoId);
  if (todo) {
    todo.text = prompt('Edit task:', todo.text);
    saveTodos();
    renderTodos();
  }
}

/**
 * Update statistics
 */
function updateStats() {
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  totalCountSpan.textContent = totalCount;
  completedCountSpan.textContent = completedCount;
}

/**
 * Save todos to localStorage
 */
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

/**
 * Clear all completed todos (optional feature)
 */
function clearCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
}

/**
 * Export todos as JSON (optional feature)
 * @returns {string} - JSON string of todos
 */
function exportTodos() {
  return JSON.stringify(todos, null, 2);
}

/**
 * Import todos from JSON (optional feature)
 * @param {string} jsonString - JSON string of todos
 */
function importTodos(jsonString) {
  try {
    const importedTodos = JSON.parse(jsonString);
    if (Array.isArray(importedTodos)) {
      todos = importedTodos;
      saveTodos();
      renderTodos();
      return true;
    }
  } catch (error) {
    console.error('Error importing todos:', error);
    return false;
  }
  return false;
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
