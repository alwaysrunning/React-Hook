export interface ServiceBase<R, B> {
  Response: R;
  Body: B;
  Error: any;
}
export type ServiceAPI = string;
export interface KV<T = any> {
  [key: string]: T;
}
/**
 * https://tapd.woa.com/qcloud_api/markdown_wikis/show/#1210161711000428493@toc8
 * 通用参数
 */
export interface CommonParams<P extends KV = {}> {
  /** 对外接口名，公共请求参数 X-TC-Action 的值应该与新增接口时指定的 对外接口名 一致，body是一定需要传递的  */
  Action: string;
  /** API 版本 */
  Version: string;
  Region?: string;
  /** 额外的参数 */
  Params?: P;
}
// 返回结构，这个要看到时候后端到底采用哪种响应标准，云API 3.0的返回标准，还是 三段式的返回标准
/** 统一返回结构 */
export interface CommonResult<T> {
  code?: number;
  msg?: string;
  data: T;
}
