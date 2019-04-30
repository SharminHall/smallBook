import { INIT_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'

// 初始化评论
export const initComment = (comments) => {
  return {type: INIT_COMMENTS, comments}
}

// 新增评论
export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}

// 删除评论
export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}
