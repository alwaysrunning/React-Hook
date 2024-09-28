import { ServiceBase, ServiceAPI } from '@/typings';

export interface AuthService {
  FetchUser: ServiceBase<any, any>;
}

export const authService: {
  [key in keyof AuthService]: ServiceAPI;
} = {
  // FetchUser: '/users',
  FetchUser: 'https://reqres.in/api/users',
};
