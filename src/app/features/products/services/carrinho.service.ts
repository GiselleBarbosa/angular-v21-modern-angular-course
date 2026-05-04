import { Injectable, signal } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly carrinhoItems = signal<Produto[]>([]);

  adicionarProdutoAoCarrinho(produto: Produto) {
    this.carrinhoItems.update((itens) => [...itens, produto]);
    console.log(`${produto.name} foi adicionado ao carrinho!`);
  }
}
