import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CIDADES')
export class Cidades {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_CIDADES' })
  idCidades: number;

  @Column({ type: 'varchar', name: 'CODIGOCIDADE' })
  codigoCidade: string;

  @Column({ type: 'varchar', name: 'NOMECIDADE' })
  nomeCidade: string;

  @Column({ type: 'varchar', name: 'UF' })
  uf: string;

  @Column({ type: 'bit', name: 'ATIVO' })
  ativo: boolean;

  @Column({ type: 'datetime', name: 'DATAREPL' })
  dataRepl: string;

  @Column({ type: 'varchar', name: 'COD_CIDADESIMPTRR' })
  codCidadesImptrr: string;

  @Column({ type: 'varchar', name: 'CODIGOPAIS' })
  codigoPais: string;

  @Column({ type: 'varchar', name: 'NOMEPAIS' })
  nomePais: string;
}
