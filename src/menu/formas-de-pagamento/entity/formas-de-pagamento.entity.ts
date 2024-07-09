import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FORMASDEPAGAMENTO')
export class FormasPagamento {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_FORMAMSDEPAGAMENTO' })
  idFormasDePagamento: number;

  @Column({ type: 'varchar', name: 'NOMEFORMAPAGEMENTO' })
  nomeFormaPagamento: string;
}
