import { CommonParams, KV } from './common';

export enum OrderDirection {
  /** 升序 */
  ASC = 'ASC',
  /** 降序 */
  DESC = 'DESC',
}

/** 排序 */
export interface OrderField<P extends KV<any> = {}> {
  Name: keyof P;
  Direction: OrderDirection | keyof typeof OrderDirection;
}
export interface Filter<F extends KV<any> = {}> {
  /** 默认过滤字段是过滤模型+KeyWord */
  Name: keyof F | 'KeyWord';
  Values: F[keyof F][];
  /** 是否开启精确搜索，默认为true, false为模糊搜索 */
  IsExact?: boolean;
}
/**
 * @param F 过滤字段取值范围
 * @param P 排序字段取值范围
 */
export interface PaginationParams<
  F extends KV<any> = {},
  P extends KV<any> = {}
> {
  PageNumber?: number;
  PageSize?: number;
  /** 模糊搜索已放到Filter */
  /** 过滤过滤字段 */
  Filters?: Filter<F>[];
  /** 字段升降序 */
  OrderFields?: OrderField<P>[];
  /** 字段排序的优先级，数组中位置靠前的优先级更高 */
  SortOrders?: (keyof P & string)[];
}

export interface CommonResponseDataWithPagination<T extends KV<any> | any> {
  PageNumber: number;
  PageSize: number;
  TotalCount: number;
  TotalPageNumber: number;
  Rows: T[];
}
/** 分页参数 */
export interface CommonParamsWithPagination<
  P extends KV = {},
  F extends KV = {}
> extends CommonParams<P> {
  Params: P & PaginationParams<F>;
}
export interface PageResponseData<T> {
  TotalCount: number;
  PageNumber: number;
  PageSize: number;
  TotalPageNumber: number;
  Rows: T[];
}
