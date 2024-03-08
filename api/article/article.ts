import request from '~/api/request'
export const getArticleList = async (data: any) => {
  const res = await request.get('/blog/article/list', data)
  console.log('/article/list:  ', res.data)
  return res.data
}
export const getArticleInfo = async (params: any) => {
  console.log(params.id)
  if (!params.id) { return }

  const res = await request.get(`/blog/article/${params.id}`, params)
  return res.data
}

export const createArticle = async (data: any) => {
  const res = await request.post('/blog/article/create', data)
  return res.data
}

// 更新阅读量
export const updateViews = async (data: any) => {
  const res = await request.post('/blog/article/views', data)
  return res.data
}

// 更新点赞数
export const updateLikes = async (data: any) => {
  // const res = await request.post("/article/likes", data);
  const res = await request.post('/blog/like', data)
  return res.data
}

// 必应每日一图
export const dailyImage = async (n?: number) => {
  const res = await request.get('/blog/resources/daily-img', { n, })
  return res.data
}

// 获取文章归档
export const getArchives = async () => {
  const res = await request.get('/article/archives')
  return res.data
}

// 获取文章评论
export const getComment = async (id: string) => {
  const res = await request.get('/blog/comment/findAll', { articleId: id, })
  return res.data
}
// 新增评论
export const addComment = async (data: any) => {
  const res = await request.post('/blog/comment/create', data)
  return res.data
}
// 删除评论
export const delComment = async (id: string) => {
  const res = await request.del('/blog/comment/delete', { id, })
  return res.data
}

// 新增回复
export const addReply = async (data: any) => {
  const res = await request.post('/blog/reply/create', data)
  return res.data
}
// 删除回复
export const delReply = async (id: string) => {
  const res = await request.del('/blog/reply/delete', { id, })
  return res.data
}
