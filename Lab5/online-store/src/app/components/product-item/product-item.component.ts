import { Component, computed, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  stars = [1, 2, 3, 4, 5];
  roundedRating = computed(() => Math.round(this.product().rating));

  onLike(): void {
    this.product().likes++;
  }

  onDelete(): void {
    this.delete.emit(this.product().id);
  }

  shareOn(platform: 'whatsapp' | 'telegram'): void {
    const p = this.product();
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent('Check out: ' + p.link)}`;
    } else {
      url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    }
    window.open(url, '_blank');
  }
}
