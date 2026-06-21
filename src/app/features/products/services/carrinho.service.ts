import { computed, Injectable, signal } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { Carrinho } from '../../cart/interfaces/carrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private readonly carrinho = signal<Carrinho[]>([]);

  readonly totalProdutos = computed(() =>
    this.carrinho().reduce((total, produto) => total + produto.quantidade, 0),
  );

  adicionarProdutoAoCarrinho(produto: Produto) {
    this.carrinho.update((items) => {
      const produtoExistente = items.find((item) => item.produto.id === produto.id);

      if (produtoExistente) {
        return items.map((item) =>
          item.produto.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item,
        );
      }

      return [...items, { produto, quantidade: 1 }];
    });
  }
}
