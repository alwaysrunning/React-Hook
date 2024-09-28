import { authService, AuthService } from './auth';

export * from './auth';


export interface Service
  extends AuthService {}

const service = {
  ...authService,
}

export default service;
