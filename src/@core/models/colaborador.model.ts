import { Usuario } from './usuario.model';
import { Material } from './material.model';
import { Endereco } from './endereco.model';
import { Coleta } from './coleta.model';
export class Colaborador extends Usuario {


  endereco: Endereco;
  coletas: Array<Coleta>;
  materiais: Array<Material>

  constructor(){
    super();
    this.endereco = new Endereco();
    this.coletas = new Array();
    this.materiais = new Array();
  }
}
