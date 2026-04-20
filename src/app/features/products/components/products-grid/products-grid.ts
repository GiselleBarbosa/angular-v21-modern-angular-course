import { Component, computed, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Produto } from '../../interfaces/produto';
import { produtosMock } from '../../mock/produtos-mock';
import { ProductCard } from '../product-card/product-card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIcon, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly produtos = signal<Produto[]>(produtosMock);
  protected readonly termoPesquisa = signal('');

  protected readonly produtosFiltrados = computed(() => {
    const termo = this.termoPesquisa().toLocaleLowerCase().trim();
    
    if (!termo) {
      return this.produtos();
    }

    return this.produtos().filter(
      (produto) =>
        produto.name.toLocaleLowerCase().includes(termo) ||
        produto.description.toLocaleLowerCase().includes(termo),
    );
  });

  addToCart(productName: string) {
    console.log(this.termoPesquisa());
    alert(`${productName} foi adicionado ao carrinho!`);
  }

  clearSearch() {
    this.termoPesquisa.set('');
  }

  // trimSearch() {
  //   this.termoPesquisa.update((value) => value.trim());
  // }
}
