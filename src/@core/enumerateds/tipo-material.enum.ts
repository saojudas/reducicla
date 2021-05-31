export enum TipoMaterial {
  PLASTICO = "PLASTICO",
  VIDRO = "VIDRO",
  PAPEL = "PAPEL",
  METAL = "METAL"
}

export const TipoMaterialsLabel = new Map<TipoMaterial, string>([
  [TipoMaterial.PLASTICO, 'Plástico'],
  [TipoMaterial.VIDRO, 'Vidro'],
  [TipoMaterial.PAPEL, 'Papel'],
  [TipoMaterial.METAL, 'Metal'],

]);
