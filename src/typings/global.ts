import { Service as AppService } from '@/service';
import { ServiceAPI } from '@/typings';

type ServiceAPIs = {
  [key in keyof Service]: ServiceAPI;
};

declare global {
  interface Window {
    security: ServiceAPIs;
  }

  export const security: ServiceAPIs;
  export type Service = AppService;
}
