import { Component, input, signal, effect } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  displayedProducts = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.displayedProducts.set([...this.products()]);
    });
  }

  onDelete(productId: number): void {
    this.displayedProducts.update((list) => list.filter((p) => p.id !== productId));
  }
}
