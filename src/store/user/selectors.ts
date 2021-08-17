import { RootState } from '..';

export const userRoleSelector = (state: RootState) => state.users.role;
export const userNameSelector = (state: RootState) => state.users.name;
