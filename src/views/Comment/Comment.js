import React, { Component } from 'react'
import CommentInput from './CommentInput/CommentInput'
import CommentList from './CommentList/CommentList'

import loadDataFromLocalstorage from '@/components/higher/wrapWithLoadData/index'
import style from './comment.module.css'

class CommentApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: props.data || []
    }
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
    this.props.saveData(comments)
  }

  onCommentDel = (index) => {
    let comments = this.state.comments.slice(0)
    comments.splice(index, 1)
    this.setState({ comments })
    this.props.saveData(comments)
  }
}

export default loadDataFromLocalstorage(CommentApp, 'comments')