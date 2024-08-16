import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONTASRECEBER')
export class ContasReceber {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_CONTASRECEBER' })
  idContasReceber?: number;

  @Column({ type: 'int', name: 'ID_CLIENTES' })
  idClientes: number;

  @Column({ type: 'int', name: 'ID_ATENDIMENTO' })
  idAtendimento: number;

  @Column({ type: 'bit', name: 'PAGO' })
  pago: boolean;

  @Column({ type: 'float', name: 'VALOR' })
  valor: number;

  @Column({ type: 'float', name: 'VALORPAGO' })
  valorPago: number;

  @Column({ type: 'datetime', name: 'DATAPGTO' })
  dataPgto?: Date;
}
