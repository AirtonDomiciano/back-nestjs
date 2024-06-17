import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('KITPRODUTOS')
export class KitProdutos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_KITPRODUTOS' })
  idKitProdutos: number;

  @Column({ type: 'int', name: 'ID_PRODUTOS' })
  idProdutos: number;
}
