import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('APIS')
export class Apis {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_APIS' })
  idApis: number;

  @Column({ type: 'varchar', name: 'NOME', nullable: false })
  nome: string;

  @Column({ type: 'varchar', name: 'URL', nullable: false })
  url: string;

  @Column({ type: 'varchar', name: 'RAPIDAPI_HOST', nullable: false })
  rapidApiHost: string;

  @Column({ type: 'bit', name: 'ATIVO' })
  ativo: boolean;
}
