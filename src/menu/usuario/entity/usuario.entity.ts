import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column({ type: 'varchar', name: 'NOME' })
  nome: string;

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
}
