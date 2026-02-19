import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = PRODUCTS;

  onShare(event: { product: Product; platform: 'whatsapp' | 'telegram' }): void {
    const link = event.product.link;
    let url = '';

    if (event.platform === 'whatsapp') {
      const text = `Check out this product: ${link}`;
      url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    } else {
      url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(
        event.product.name
      )}`;
    }

    window.open(url, '_blank');
  }
}
