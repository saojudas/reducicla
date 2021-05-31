import { Role } from "../enumerateds/role.enum";

export class Usuario {
  id: number;
  dataCadastro: Date;
  nome: string;
  sobrenome: string;
  email: string;
  role: Role;

  constructor(){
    this.id = null;
    this.dataCadastro = new Date();
    this.nome = null;
    this.sobrenome = null;
    this.email = null;
    this.role = null;
  }
}
