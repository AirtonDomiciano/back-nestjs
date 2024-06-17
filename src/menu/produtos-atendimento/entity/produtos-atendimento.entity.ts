import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUTOSATENDIMENTO')
export class ProdutosAtendimento {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_PRODUTOSATENDIMENTO' })
  idProdutosAtendimento: number;

  @Column({ type: 'int', name: 'ID_SERVICOS' })
  idServicos: number;

  @Column({ type: 'varchar', name: 'ID_PRODUTOS' })
  idProdutos: string;
}
