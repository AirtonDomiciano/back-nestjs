import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MOVLCTOS')
export class Movimentacoes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_MOVLCTOS' })
  idMovlctos?: number;

  @Column({ type: 'int', name: 'ID_CONTASRECEBER' })
  idContasReceber?: number;

  @Column({ type: 'int', name: 'ID_CONTASPAGAR' })
  idContasPagar?: number;

  @Column({ type: 'int', name: 'ID_FORMASDEPAGAMENTO' })
  idFormasDePagamento: number;

  @Column({ type: 'float', name: 'VALORPAGO' })
  valorPago: number;

  @Column({ type: 'bit', name: 'PAGAMENTO' })
  pagamento: boolean;

  @Column({ type: 'bit', name: 'RECEBIMENTO' })
  recebimento: boolean;

  @Column({ type: 'datetime', name: 'DATA' })
  data: Date;
}
