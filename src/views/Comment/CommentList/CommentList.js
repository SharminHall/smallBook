import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './index.module.css'


/**
 * 单条评论类
 */
class Comment extends Component {
  static propTypes = {
    onCommentDel: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      timeString: ''
    }
  }

  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(() => {
      this._updateTimeString()
    }, 5000)
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }

  render () {
    const { comment, index } = this.props
    return (
      <div className={style.commentLi}>
        <div className={style.commentInfo}>
          <div className='comment-user'>
            <span>{comment.username} </span>：
          </div>
          <p dangerouslySetInnerHTML={{
            __html: this._getProcessedContent(comment.content)
          }}></p>
        </div>
        <div className={style.commentFooter}>
          <span className={style.commentBtn}>
            <span className={style.commentBtnDel} onClick={() => { this.props.onCommentDel(index) }}>删除</span>
          </span>
          <span className={style.commentTime}>{this.state.timeString}</span>
        </div>
      </div>
    )
  }

  _updateTimeString = () => {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  _getProcessedContent = (content) => {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
}

/**
 * 评论列表容器组件
 */
function CommentList ({
  comments = [],
  onCommentDel = function () {}
}) {
  return (
    <div className="comment-list">
      {comments.map((comment, i) => <Comment comment={comment} index={i} key={i} onCommentDel={onCommentDel} />)}
    </div>
  )
}

export default CommentList
