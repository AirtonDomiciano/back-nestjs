import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TIPOSERVICO')
export class TipoServico {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_TIPOSERVICO' })
  idTipoServico: number;

  @Column({ type: 'varchar', name: 'NOMESERVICO' })
  nomeServico: number;

  @Column({ type: 'float', name: 'VALOR' })
  valor: number;
}
