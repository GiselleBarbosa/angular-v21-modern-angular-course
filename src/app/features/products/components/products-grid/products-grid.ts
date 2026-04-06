import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Produto } from '../../interfaces/produto';
import { produtosMock } from '../../mock/produtos-mock';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIcon],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly produtos = signal<Produto[]>(produtosMock);

  addToCart(productName: string) {
    alert(`${productName} foi adicionado ao carrinho!`);
  }
}
