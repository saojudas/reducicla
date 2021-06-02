import { Comentario } from './comentario.model';

export class Post {
  id: number;
  dataCadastro: Date;
  titulo: string;
  descricao: string;
  imageUrl: string;
  comentarios: Array<Comentario>;

  constructor() {
    this.id = null;
    this.dataCadastro = new Date();
    this.titulo = null;
    this.descricao = null;
    this.imageUrl = null;
    this.comentarios = new Array();
  }

}
