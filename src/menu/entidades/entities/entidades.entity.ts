import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ENTIDADES')
export class Entidades {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_ENTIDADES' })
  idEntidades: number;

  @Column({ type: 'varchar', name: 'NOMEENTIDADE', nullable: true })
  nomeEntidade: string;

  @Column({ type: 'tinyint', name: 'PESSOA', nullable: true })
  pessoa: number;

  @Column({ type: 'varchar', name: 'ENDERECO', nullable: true })
  endereco: string;

  @Column({ type: 'varchar', name: 'BAIRRO', nullable: true })
  bairro: string;

  @Column({ type: 'varchar', name: 'CEP', nullable: true })
  cep: string;

  @Column({ type: 'varchar', name: 'CPFCNPJ', nullable: true })
  cpfCnpj: string;

  @Column({ type: 'varchar', name: 'IERG', nullable: true })
  ierg: string;

  @Column({ type: 'varchar', name: 'FONE', nullable: true })
  fone: string;

  @Column({ type: 'varchar', name: 'EMAIL', nullable: true })
  email: string;

  @Column({ type: 'smalldatetime', name: 'DTANASCIMENTO', nullable: true })
  dtaNascimento: Date;

  @Column({ type: 'real', name: 'LIMITE', nullable: true })
  limite: number;

  @Column({ type: 'bit', name: 'LISTANEGRA', nullable: false })
  listaNegra: boolean;

  @Column({ type: 'bit', name: 'ATIVO', nullable: false })
  ativo: boolean;
}