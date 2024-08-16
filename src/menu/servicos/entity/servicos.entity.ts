import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SERVICOS')
export class Servicos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_SERVICOS' })
  idServicos?: number;

  @Column({ type: 'int', name: 'ID_ATENDIMENTO' })
  idAtendimento: number;

  @Column({ type: 'int', name: 'ID_USUARIOS' })
  idUsuarios: number;

  @Column({ type: 'int', name: 'ID_ANIMAL' })
  idAnimal: number;

  @Column({ type: 'int', name: 'ID_TIPOSERVICO' })
  idTipoServico: number;

  @Column({ type: 'float', name: 'ID_CLIENTES' })
  idClientes: number;

  @Column({ type: 'tinyint', name: 'STATUS' })
  status: number;

  @Column({ type: 'time', name: 'TEMPO' })
  tempo: number;
}
