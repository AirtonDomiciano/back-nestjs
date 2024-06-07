import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UF')
export class Uf {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_UF' })
  idUf: number;

  @Column({ type: 'varchar', name: 'NOME' })
  nome: string;

  @Column({ type: 'varchar', name: 'SIGLA' })
  sigla: string;
}
