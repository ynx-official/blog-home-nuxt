/**
 * 文章
 */
export interface IArticle {
  /**
   * 文章id
   */
  id: number;
  /**
   * 文章缩略图
   */
  articleCover: string;
  /**
   * 文章标题
   */
  articleTitle: string;
  /**
   * 文章标题
   */
  articleContent: string;
  /**
   * 文章类型 (1原创 2转载 3翻译)
   */
  articleType: number;
  /**
   * 是否置顶 (0否 1是)
   */
  isTop: number;
  /**
   * 是否推荐 (0否 1是)
   */
  isRecommend: number;
  /**
   * 是否删除 (0否 1是)
   */
  isDelete: number;
  /**
   * 状态 (1公开 2私密 3草稿)
   */
  status: number;
  /**
   * 点赞量
   */
  likeCount: number;
  /**
   * 浏览量
   */
  viewCount: number;
  /**
   * 文章分类名
   */
  categoryName: string;
  /**
   * 文章标签
   */
  tagVOList: TagVO[];
  /**
   * 发表时间
   */
  createTime: string;
}

/**
 * 标签
 */
export interface TagVO {
  /**
   * 标签id
   */
  id: number;
  /**
   * 标签名
   */
  tagName: string;
}

export interface CategoryVO {
  id: number;
  categoryName: string;
}

export interface ArticleDetailVO {
  id: number;
  articleCover: string;
  articleTitle: string;
  articleContent: string;
  articleType: number;
  viewCount: number;
  likeCount: number;
  category: CategoryVO;
  tagVOList: TagVO[];
  lastArticle: ArticleDetailVO;
  nextArticle: ArticleDetailVO;
  createTime: string;
  updateTime: string;
  nickname: string;
  avatar: string;
}
