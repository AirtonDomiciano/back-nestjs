import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produtos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  categoria: string;

  @Column()
  preco: string;

  @Column()
  descricao: string;
}
