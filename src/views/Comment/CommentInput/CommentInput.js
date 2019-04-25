import React, { Component } from 'react'
import PropTypes from 'prop-types'

import loadDataFromLocalstorage from '@/components/higher/wrapWithLoadData/index'
import style from './index.module.css'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    saveData: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      username: props.data,
      content: ''
    }
  }

  componentDidMount () {
    this.textarea.focus()
  }

  render () {
    return (
      <div className={style.commentInput}>
          <div className={style.commentField}>
            <span className={style.commentFieldName}>用户名：</span>
            <div className={style.commentFieldInput}>
              <input
                className={style.input}
                value={this.state.username}
                onChange={this.onChangeUsername}
                onBlur={this.onBlurUsername}
              />
            </div>
          </div>
          <div className={style.commentField}>
            <span className={style.commentFieldName}>评论内容：</span>
            <div className={style.commentFieldInput}>
              <textarea
                ref={textarea => this.textarea = textarea}
                className={style.textarea}
                value={this.state.content}
                onChange={this.onChangeContent} 
              />
            </div>
          </div>
          <div className={style.commentFieldButton}>
            <button className={style.commentSubmit} onClick={this.onSubmit} >
              发布
            </button>
          </div>
      </div>
    )
  }

  onBlurUsername = (e) => {
    this.props.saveData(e.target.value)
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onChangeContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  onSubmit = (e) => {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({
        username,
        content,
        createTime: new Date().getTime()
      })
    }
    this.setState({
      content: ''
    })
  }
}

export default loadDataFromLocalstorage(CommentInput, 'uname')
