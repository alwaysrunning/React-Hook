import { isNull, isUndefined } from 'lodash';

export const isNullOrUndefined = (value: any) =>
  isUndefined(value) || isNull(value);
