import { Post } from "./post.model";

export class Comentario {
  id: number;
  nome: string;
  text: string;
  post: Post;

  constructor() {
    this.id = null;
    this.nome = null;
    this.text = null;
    this.post = new Post();
  }

}
