import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USUARIOS')
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_USUARIOS' })
  id: number;

  @Column({ type: 'varchar', name: 'NOME' })
  nome: string;

  @Column({ type: 'varchar', name: 'SENHA' })
  senha: string;

  @Column({ type: 'varchar', name: 'SOBRENOME' })
  sobreNome: string;

  @Column({ type: 'int', name: 'IDADE' })
  idade: number;

  @Column({ type: 'varchar', name: 'EMAIL' })
  email: string;

  @Column({ type: 'int', name: 'CEP' })
  cep: number;

  @Column({ type: 'varchar', name: 'FUNCAO' })
  funcao: string;

  @Column({ type: 'bit', name: 'ATIVO' })
  ativo: boolean;


}
