import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PARCELAS')
export class Parcelas {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_PARCELAS' })
  idParcelas?: number;

  @Column({ type: 'int', name: 'ID_CONTASRECEBER' })
  idContasReceber: number;

  @Column({ type: 'int', name: 'ID_FORMASDEPAGAMENTO' })
  idFormasDePagamento: number;

  @Column({ type: 'float', name: 'VALORPARCELA' })
  valorParcela: number;

  @Column({ type: 'datetime', name: 'DATAPGTO' })
  dataPgto: Date;
}
