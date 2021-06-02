import { Coleta } from './coleta.model';
import { Colaborador } from './colaborador.model';
import { Endereco } from './endereco.model';

export class PontoColeta {
  id: number;
  dataCadastro: Date;
  aprovado: boolean;
  endereco: Endereco;
  colaboradores: Array<Colaborador>;
  coletas: Array<Coleta>;

  constructor(){
    this.id = null;
    this.dataCadastro = new Date();
    this.aprovado = false;
    this.endereco = new Endereco();
    this.colaboradores = new Array();
    this.coletas = new Array();
  }
}
