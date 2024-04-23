import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ENTIDADES')
export class Entidades {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_ENTIDADES' })
  idEntidades?: number;

  @Column({ type: 'varchar', name: 'NOMEENTIDADE' })
  nomeEntidade: string;

  @Column({ type: 'tinyint', name: 'PESSOA' })
  pessoa: number;

  @Column({ type: 'varchar', name: 'ENDERECO' })
  endereco: string;

  @Column({ type: 'varchar', name: 'BAIRRO' })
  bairro: string;

  @Column({ type: 'varchar', name: 'CEP' })
  cep: string;

  @Column({ type: 'varchar', name: 'CPFCNPJ' })
  cpfCnpj: string;

  @Column({ type: 'varchar', name: 'IERG' })
  ierg: string;

  @Column({ type: 'varchar', name: 'FONE' })
  fone: string;

  @Column({ type: 'varchar', name: 'EMAIL' })
  email: string;

  @Column({ type: 'smalldatetime', name: 'DTANASCIMENTO' })
  dtaNascimento: string;

  @Column({ type: 'real', name: 'LIMITE' })
  limite: number;

  @Column({ type: 'bit', name: 'LISTANEGRA' })
  listaNegra: boolean;

  @Column({ type: 'bit', name: 'ATIVO' })
  ativo: boolean;
}
