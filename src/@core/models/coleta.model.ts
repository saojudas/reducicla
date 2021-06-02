import { Material } from './material.model';
import { Colaborador } from './colaborador.model';
import { Coletor } from './coletor.model';
import { PontoColeta } from './ponto-coleta.model';

export class Coleta {
  id: number;
  dataColeta: Date;
  coletor: Coletor;
  colaborador: Colaborador;
  pontoColeta: PontoColeta;
  materiais: Array<Material>;

  constructor(){
    this.id = null;
    this,this.dataColeta = new Date();
    this.coletor = new Coletor();
    this.colaborador = new Colaborador();
    this.pontoColeta = new PontoColeta();
    this.materiais = new Array();
  }
}
