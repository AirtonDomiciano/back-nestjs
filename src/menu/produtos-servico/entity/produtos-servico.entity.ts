import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUTOSSERVICO')
export class ProdutosServico {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_PRODUTOSSERVICO' })
  idProdutosServico: number;

  @Column({ type: 'int', name: 'ID_SERVICOSANIMAL' })
  idServicosAnimal: number;

  @Column({ type: 'varchar', name: 'ID_PRODUTOS' })
  idProdutos: string;
}
