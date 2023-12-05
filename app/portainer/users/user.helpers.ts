import { Role, User } from './types';

export function filterNonAdministratorUsers(users: User[]) {
  return users.filter((user) => user.Role !== Role.Admin);
}

export function isAdmin(user?: { Role: Role }): boolean {
  return !!user && user.Role === 1;
}
