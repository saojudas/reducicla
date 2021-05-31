export enum Role {
  ADMIN = "ADMIN",
  COLABORADOR = "COLABORADOR",
  COLETOR = "COLETOR"
}

export const rolesLabel = new Map<Role, string>([
  [Role.ADMIN, 'Admin'],
  [Role.COLABORADOR, 'Colaborador'],
  [Role.COLETOR, 'Coletor']
]);
