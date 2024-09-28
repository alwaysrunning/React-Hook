export enum SecurityLeveTypeEnum {
  SAFETY = 'SAFETY',
  ALARM = 'ALARM',
  URGENT = 'URGENT',
  DANGER = 'DANGER',
}

export const SecurityLeveTypeMap: Map<SecurityLeveTypeEnum, string> = (() => {
  const map = new Map();
  map
    .set(SecurityLeveTypeEnum.SAFETY, '安全')
    .set(SecurityLeveTypeEnum.ALARM, '告警')
    .set(SecurityLeveTypeEnum.URGENT, '紧急')
    .set(SecurityLeveTypeEnum.DANGER, '危险');

  return map;
})();