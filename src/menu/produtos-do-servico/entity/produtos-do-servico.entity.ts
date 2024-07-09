import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUTOSDOSERVICO')
export class ProdutosDoServico {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_PRODUTOSDOSERVICO' })
  idProdutosDoServico: number;

  @Column({ type: 'int', name: 'ID_SERVICOS' })
  idServicos: number;

  @Column({ type: 'int', name: 'ID_PRODUTOS' })
  idProdutos: number;
}
