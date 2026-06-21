import { Produto } from '../../products/interfaces/produto';

export interface Carrinho {
  produto: Produto;
  quantidade: number;
}
