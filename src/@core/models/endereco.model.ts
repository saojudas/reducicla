export class Endereco {
  id: number;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  lat: number;
  lng: number;

  constructor() {
    this.id = null;
    this.logradouro = null;
    this.numero = null;
    this.complemento = null;
    this.bairro = null;
    this.cidade = null;
    this.estado = null;
    this.cep = null;
    this.lat = 0;
    this.lng = 0;
  }
}
