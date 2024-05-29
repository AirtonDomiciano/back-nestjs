import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USUARIOS')
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_USUARIOS' })
  idUsuarios: number;

  @Column({ type: 'varchar', name: 'NOME', nullable: false })
  nome: string;

  @Column({ type: 'varchar', name: 'SOBRENOME', nullable: false })
  sobrenome: string;

  @Column({ type: 'varchar', name: 'EMAIL', nullable: false })
  email: string;

  @Column({ type: 'varchar', name: 'SENHA', nullable: false })
  senha: string;

  @Column({ type: 'int', name: 'IDADE', nullable: true })
  idade?: number;

  @Column({ type: 'varchar', name: 'CEP', nullable: true })
  cep?: string;

  @Column({ type: 'varchar', name: 'FUNCAO', nullable: true })
  funcao?: string;

  @Column({ type: 'bit', name: 'ATIVO', nullable: true })
  ativo?: boolean;

  @Column({ type: 'varchar', name: 'LOCALIDADE', nullable: true })
  localidade?: string;

  @Column({ type: 'varchar', name: 'UF', nullable: true })
  uf?: string;

  @Column({ type: 'varchar', name: 'BAIRRO', nullable: true })
  bairro?: string;

  @Column({ type: 'varchar', name: 'LOGRADOURO', nullable: true })
  logradouro?: string;
}
