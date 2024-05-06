import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CONEXOES_API')
export class ConexoesApi {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_LINKS' })
  idLinks: number;

  @PrimaryColumn({ type: 'int', name: 'ID_APIS', nullable: false })
  idApis: number;

  @PrimaryColumn({ type: 'int', name: 'ID_USUARIOS', nullable: false })
  idUsuarios: number;

  @Column({ type: 'varchar', name: 'RAPIDAPI_KEY', nullable: false })
  rapidApiKey: string;
}
