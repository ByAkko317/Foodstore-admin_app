import { api } from "./api";
import type {
  AdminUserUpdatePayload,
  IAdminUser,
} from "../types/IAdminUser";
import type { UserRole } from "../types/IUser";

type AdminUsersApiResponse = {
  data: IAdminUser[];
  total: number;
};

export const getAdminUsers = async (): Promise<IAdminUser[]> => {
  const response = await api.get<AdminUsersApiResponse>("/api/v1/admin/usuarios");
  return response.data.data;
};

export const updateAdminUser = async (
  id: number,
  data: AdminUserUpdatePayload,
): Promise<IAdminUser> => {
  const response = await api.patch<IAdminUser>(
    `/api/v1/admin/usuarios/${id}`,
    data,
  );

  return response.data;
};

export const updateAdminUserRoles = async (
  id: number,
  roles: UserRole[],
): Promise<IAdminUser> => {
  const response = await api.patch<IAdminUser>(
    `/api/v1/admin/usuarios/${id}/roles`,
    {
      roles,
    },
  );

  return response.data;
};

export const deleteAdminUser = async (id: number): Promise<void> => {
  await api.delete(`/api/v1/admin/usuarios/${id}`);
};