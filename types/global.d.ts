type BannerState = {
  copyright: string
  copyrightlink: string
  title: string
  url: string
}

interface queryState {
  page: number
  pageSize: number
  title: string
  description: string
  content: string
}

interface StringKey {
  [propName: string]: any
}

interface userInfoState {
  nickname: string
  homepage: string
  intro: string
  avatar: string
  uid: number | null
  role: string
}

/**
 * 分页返回接口
 */
interface PageResult<T> {
  /**
   * 分页结果
   */
  records: T;
  /**
   * 总数
   */
  total: number;
}

/**
 * 结果返回接口
 */
export interface Result<T> {
  /**
   * 状态码
   */
  code: number;
  /**
   * 返回信息
   */
  msg: string;
  /**
   * 返回数据
   */
  data: T;
}

declare module 'js-cookie'
