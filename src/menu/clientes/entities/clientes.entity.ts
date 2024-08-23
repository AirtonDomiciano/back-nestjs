import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CLIENTES')
export class Clientes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_CLIENTES' })
  idClientes: number;

  @Column({ type: 'smallint', name: 'ID_CIDADES', nullable: false })
  idCidades: number;

  @Column({ type: 'int', name: 'ID_UF', nullable: false })
  idUf: number;

  @Column({ type: 'varchar', name: 'NOMECLIENTES', nullable: true })
  nomeClientes: string;

  @Column({ type: 'varchar', name: 'BAIRRO', nullable: true })
  bairro: string;

  @Column({ type: 'varchar', name: 'LOGRADOURO', nullable: true })
  logradouro: string;

  @Column({ type: 'varchar', name: 'CEP', nullable: true })
  cep: string;

  @Column({ type: 'varchar', name: 'CPFCNPJ', nullable: true })
  cpfCnpj: string;

  @Column({ type: 'varchar', name: 'FONE', nullable: true })
  fone: string;

  @Column({ type: 'varchar', name: 'EMAIL', nullable: true })
  email: string;

  @Column({ type: 'smalldatetime', name: 'DTANASCIMENTO', nullable: true })
  dtaNascimento: Date;

  @Column({ type: 'bit', name: 'ATIVO', nullable: false })
  ativo: boolean;
}
