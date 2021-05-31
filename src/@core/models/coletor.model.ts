import { Coleta } from './coleta.model';
import { Endereco } from './endereco.model';
import { Usuario } from 'src/@core/models/usuario.model';

export class Coletor extends Usuario {
  endereco: Endereco;
  coletas: Array<Coleta>

  constructor(){
    super();
    this.endereco = new Endereco();
    this.coletas = new Array();
  }
}
