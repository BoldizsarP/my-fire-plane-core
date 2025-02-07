import { UserRoles } from "./defaults";

export interface AdditionalUserFormat {
  userName: string;
  actualName: string;
  email: string;
  permissionsData: UserRoles;
}

export interface AdditionalUsersReturn {
  additionalUsers: AdditionalUserFormat[];
}
