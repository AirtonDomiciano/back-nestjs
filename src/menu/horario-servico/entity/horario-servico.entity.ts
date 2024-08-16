import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('HORARIOSERVICO')
export class HorarioServico {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_HORARIO' })
  idHorario?: number;

  @Column({ type: 'int', name: 'ID_SERVICOS', nullable: false })
  idServicos: number;

  @Column({ type: 'datetime', name: 'HORARIOINICIO', nullable: false })
  horarioInicio: Date;

  @Column({ type: 'datetime', name: 'HORARIOTERMINO' })
  horarioTermino?: Date;
}
