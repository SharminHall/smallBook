import { INIT_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from './actionTypes'

// 评论reducer
export default (state, action) => {
  if (!state) {
    return { commments: [] }
  }
  switch (action.type) {
    case INIT_COMMENTS:
      // 初始化评论
      return { ...state, comments: action.comments }
    case ADD_COMMENT:
      // 新增评论
      return {
        ...state,
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      // 删除评论
      return {
        ...state,
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}
