import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ATENDIMENTO')
export class Atendimento {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_ATENDIMENTO' })
  idAtendimento: number;

  @Column({ type: 'int', name: 'ID_CLIENTES', nullable: false })
  idClientes: number;

  @Column({ type: 'int', name: 'ID_ANIMAIS', nullable: false })
  idAnimais: number;

  @Column({ type: 'int', name: 'ID_SERVICOS' })
  idServicos: number;
}
