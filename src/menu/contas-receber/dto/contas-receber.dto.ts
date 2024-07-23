export class ContasReceberDto {
  idContasReceber?: number;
  idAtendimento?: number;
  pago: boolean;
  nomeClientes: string;
  valor: number;
  valorPago: number;
  dataVcto: Date;
  dataPgto: Date;
  nomeFormaPagamento: string;
}
