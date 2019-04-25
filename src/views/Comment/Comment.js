import React, { Component } from 'react'
import CommentInput from './CommentInput/CommentInput'
import CommentList from './CommentList/CommentList'
import style from './comment.module.css'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  componentWillMount () {
    this._loadComments()
  }

  render () {
    return (
      <div className={style.wrapper}>
        <CommentInput onSubmit={this.onSubmit}/>
        <CommentList comments={this.state.comments} onCommentDel={this.onCommentDel} />
      </div>
    )
  }

  onSubmit = (e) => {
    if (!e) return
    if (!e.username) return alert('请输入用户名')
    if (!e.content) return alert('请输入评论内容')
    const comments = this.state.comments.slice(0)
    comments.unshift(e)
    this.setState({ comments })
    this._saveComments(comments)
  }

  onCommentDel = (index) => {
    let comments = this.state.comments.slice(0)
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    comments && this.setState({ comments: JSON.parse(comments) })
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
}

export default CommentApp