import { Colaborador } from './colaborador.model';
import { TipoMaterial } from './../enumerateds/tipo-material.enum';

export class Material {
  id: number;
  nome: string;
  quantidade: number;
  tipo: TipoMaterial;
  colaborador: Colaborador;

  constructor(){
    this.id = null;
    this.nome = null;
    this.quantidade = 0;
    this.tipo = null;
    this.colaborador = new Colaborador();
  }
}
