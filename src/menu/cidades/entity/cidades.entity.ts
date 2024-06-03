import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CIDADES')
export class Cidades {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_CIDADES' })
  idClientes: number;

  @Column({ type: 'int', name: 'CODIGOCIDADE', nullable: false })
  codigoCidade: string;

  @Column({ type: 'varchar', name: 'NOMECIDADE', nullable: false })
  nomeCidade: string;

  @PrimaryColumn({ type: 'int', name: 'ID_UF' })
  idUf: number;
}
