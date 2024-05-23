import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUTOS')
export class Produtos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_PRODUTOS' })
  idProdutos: number;

  @Column({ type: 'int', name: 'CODIGOPRODUTO' })
  codigoProduto: number;

  @Column({ type: 'varchar', name: 'NOMEPRODUTO' })
  nomeProduto: string;

  @Column({ type: 'int', name: 'QTDETOTAL' })
  qtdeTotal: number;

  @Column({ type: 'int', name: 'QTDEENTRADA' })
  qtdeEntrada: number;

  @Column({ type: 'int', name: 'QTDESAIDA' })
  qtdeSaida: number;

  @Column({ type: 'float', name: 'VALOR' })
  valor: number;

  @Column({ type: 'float', name: 'DESCONTO' })
  desconto: number;

  @Column({ type: 'varchar', name: 'IMAGEM' })
  imagem: string;

  @Column({ type: 'bit', name: 'ATIVO' })
  ativo: boolean;
}
