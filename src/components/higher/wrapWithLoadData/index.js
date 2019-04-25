import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  class loadDataFromLocalstorage extends Component {
    constructor () {
      super()
      this.state = {
        data: null
      }
    }

    componentWillMount () {
      this._lodaData()
    }

    render () {
      return <WrappedComponent data={this.state.data} saveData={this._saveData} {...this.props} />
    }

    _saveData = (data) => {
      try {
        localStorage.setItem(name, JSON.stringify(data))
      } catch (error) {
        localStorage.setItem(name, `${data}`)
      }
    }

    _lodaData = () => {
      let data = localStorage.getItem(name)
      try {
        this.setState({ data: JSON.parse(data) })
      } catch (error) {
        this.setState({ data })
      }
    }
  }

  return loadDataFromLocalstorage
}
