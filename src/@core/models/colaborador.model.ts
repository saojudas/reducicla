import { Usuario } from './usuario.model';
import { Material } from './material.model';
import { Endereco } from './endereco.model';
export class Colaborador extends Usuario {
  endereco: Endereco;
  materiais: Array<Material>

  constructor(){
    super();
    this.endereco = new Endereco();
    this.materiais = new Array();
  }
}
