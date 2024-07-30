import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ATENDIMENTO')
export class Atendimento {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_ATENDIMENTO' })
  idAtendimento: number;

  @Column({ type: 'date', name: 'DATA' })
  data: Date;

  @Column({ type: 'time', name: 'HORA' })
  hora: Date;

  @Column({ type: 'varchar', name: 'DESCRICAO' })
  descricao: string;

  @Column({ type: 'float', name: 'VALOR' })
  valor: number;
}
