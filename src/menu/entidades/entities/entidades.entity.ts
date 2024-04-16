import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entidades {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  senha: string;
}
