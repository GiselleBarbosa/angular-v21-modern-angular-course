import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly produto = input.required<Produto>();
  readonly addButtonLabel = input<string>('Comprar');
  readonly addButtonCartClicked = output();

  clickAddCartButton() {
    this.addButtonCartClicked.emit();
  }
}
