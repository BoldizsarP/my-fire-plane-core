export enum UserRoles {
  Admin = "ADMIN",
  Pilot = "PILOT",
  MX = "MX",
  OBS = "OBS",
}

export type GenericResponse<T extends object> = T & { noErrors: boolean };
