import { Produto } from '../interfaces/produto';

export const produtosMock: Produto[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description:
      'Fones de ouvido sem fio de alta qualidade com cancelamento de ruído e som premium.',
    price: 199.99,
    originalPrice: 249.99,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    description:
      'Acompanhe suas metas fitness com este smartwatch avançado com monitoramento de frequência cardíaca.',
    price: 299.99,
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    description: 'Caixa de som compacta com graves potentes e bateria de até 12 horas.',
    price: 79.99,
    originalPrice: 99.99,
  },

  // Novos itens 👇

  {
    id: 4,
    name: 'Gaming Mechanical Keyboard',
    description: 'Teclado mecânico gamer com iluminação RGB e alta precisão para jogos.',
    price: 149.99,
  },
  {
    id: 5,
    name: '4K Ultra HD Monitor',
    description: 'Monitor 4K com alta definição, ideal para produtividade e entretenimento.',
    price: 399.99,
    originalPrice: 499.99,
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    description: 'Mouse sem fio ergonômico com alta precisão e longa duração de bateria.',
    price: 49.99,
  },
  {
    id: 7,
    name: 'USB-C Hub',
    description:
      'Hub USB-C com múltiplas entradas para expandir a conectividade do seu dispositivo.',
    price: 59.99,
  },
  {
    id: 8,
    name: 'Noise Cancelling Earbuds',
    description: 'Fones intra-auriculares com cancelamento de ruído e excelente qualidade de som.',
    price: 129.99,
    originalPrice: 159.99,
  },
];
