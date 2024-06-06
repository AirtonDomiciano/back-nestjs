import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servicos')
export class Servicos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_SERVICOS' })
  idServicos: number;

  @Column({ type: 'varchar', name: 'NOMESERVICO' })
  nomeServico: string;
}
