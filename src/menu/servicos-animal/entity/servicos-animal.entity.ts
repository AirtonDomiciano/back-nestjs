import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SERVICOSANIMAL')
export class ServicosAnimal {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_SERVICOSANIMAL' })
  idServicosAnimal: number;

  @Column({ type: 'varchar', name: 'NOMESERVICO' })
  nomeServico: number;

  @Column({ type: 'float', name: 'VALOR' })
  valor: number;
}
