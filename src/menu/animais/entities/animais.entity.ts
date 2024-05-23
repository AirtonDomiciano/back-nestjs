import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ANIMAIS')
export class Animais {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_ANIMAL' })
  idAnimal: number;

  @Column({ type: 'int', name: 'ID_CLIENTES' })
  idClientes: number;

  @Column({ type: 'varchar', name: 'NOMEANIMAL' })
  nomeAnimal: string;

  @Column({ type: 'varchar', name: 'DIVISAOANIMAL' })
  divisaoAnimal: string;

  @Column({ type: 'varchar', name: 'ESPECIEANIMAL' })
  especieAnimal: string;

  @Column({ type: 'varchar', name: 'RACAANIMAL' })
  racaAnimal: string;

  @Column({ type: 'int', name: 'IDADEANIMAL' })
  idadeAnimal: number;
}
