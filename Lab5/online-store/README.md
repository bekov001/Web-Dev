# Lab 5 — Online Store (Components & Interaction)

Angular application with category-based product hierarchy, parent-child component communication, and interactive features (like, delete, share).

## How to run

```bash
cd Lab5/online-store
npm install
ng serve
```

Open http://localhost:4200 in your browser.

## Structure

- **AppComponent** — displays category buttons, tracks selection, passes products to child
- **ProductListComponent** — receives products via `input()`, renders list, handles delete events
- **ProductItemComponent** — displays product card with like, delete, and share buttons

4 categories (Smartphones, Laptops, Headphones, Tablets), 5 products each (20 total). All products link to real kaspi.kz items.
