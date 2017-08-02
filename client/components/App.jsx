import React from 'react'

import getNotice from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {title: 'noot noot', description: 'error'}
    }
    this.setData = this.setData.bind(this)
  }

  componentDidMount () {
    getNotice(this.setData)
  }

  setData (err, noticeData) {
    if (!err) {
      this.setState({data: noticeData})
      console.log(noticeData)
    }
  }

  render () {
    return (
      <div>
        <h1>Auckland Transport Information Site</h1>
        <h2>{this.state.data.title}</h2>
        <h3> {this.state.data.description}</h3>
      </div>

    )
  }
}
