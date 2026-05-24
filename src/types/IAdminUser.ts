import type { UserRole } from "./IUser";

export interface IAdminUserRole {
  rol_codigo: UserRole;
}

export interface IAdminUser {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  celular: string | null;
  disabled: boolean;
  roles: IAdminUserRole[];
}

export type AdminUserUpdatePayload = {
  nombre: string;
  apellido: string;
  email: string;
  celular: string | null;
  disabled: boolean;
};