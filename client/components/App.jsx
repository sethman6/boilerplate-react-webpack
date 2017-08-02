import React from 'react'
import Notice from './Notice'
import getNotice from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {}
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
        <Notice data={this.state.data}/>
      </div>

    )
  }
}
