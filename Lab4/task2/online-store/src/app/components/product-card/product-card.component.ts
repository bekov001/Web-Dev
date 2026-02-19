import { CommonModule } from '@angular/common';
import { Component, computed, input, output, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
  share = output<{ product: Product; platform: 'whatsapp' | 'telegram' }>();

  selectedIndex = signal(0);
  stars = [1, 2, 3, 4, 5];

  selectedImage = computed(() => {
    const images = this.product().images;
    return images[this.selectedIndex()] ?? this.product().image;
  });

  roundedRating = computed(() => Math.round(this.product().rating));

  selectImage(index: number): void {
    this.selectedIndex.set(index);
  }

  shareOn(platform: 'whatsapp' | 'telegram'): void {
    this.share.emit({ product: this.product(), platform });
  }
}
