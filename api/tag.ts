import request from '~~/api/request'
export const getTagById = async (id: number) => {
  const res = await request.get('/blog/tag/' + id)
  return res.data
}
export const getAllTag = async () => {
  const res = await request.get('/blog/tag', { isDelete: true, })
  return res.data
}
export const createTag = async (data: any) => {
  const res = await request.post('/blog/tag', data)
  return res.data
}
