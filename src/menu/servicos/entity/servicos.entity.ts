import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SERVICOS')
export class Servicos {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID_SERVICOS' })
  idServicos: number;

  @Column({ type: 'int', name: 'ID_ATENDIMENTO' })
  idAtendimento: number;

  @Column({ type: 'int', name: 'ID_PRODUTOS' })
  idProdutos: number;

  @Column({ type: 'int', name: 'ID_ANIMAL' })
  idAnimal: number;

  @Column({ type: 'int', name: 'ID_SERVICOSANIMAL' })
  idServicosAnimal: number;

  @Column({ type: 'float', name: 'ID_CLIENTES' })
  idClientes: number;

  @Column({ type: 'float', name: 'VALORSERVICO' })
  valorServico: number;

  @Column({ type: 'tinyint', name: 'STATUS' })
  status: number;

  @Column({ type: 'time', name: 'TEMPO' })
  tempo: number;
}
