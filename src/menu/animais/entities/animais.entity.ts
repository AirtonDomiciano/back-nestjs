import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ANIMAIS')
export class Animais {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_ANIMAL' })
  idAnimal: number;

  @Column({ type: 'int', name: 'ID_CLIENTES' })
  idClientes: number;

  @Column({ type: 'varchar', name: 'NOME' })
  nome: string;

  @Column({ type: 'varchar', name: 'DIVISAO' })
  divisao: string;

  @Column({ type: 'varchar', name: 'ESPECIE' })
  especie: string;

  @Column({ type: 'varchar', name: 'RACA' })
  raca: string;

  @Column({ type: 'bit', name: 'ATIVO' })
  ativo: boolean;
}
