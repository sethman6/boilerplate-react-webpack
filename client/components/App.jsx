import React from 'react'
import Search from './Search'
import getNotice from '../api'

const flexContainer = {
  display: "flex",
  flexDirection:"column"
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.setData = this.setData.bind(this)
  }

  componentDidMount() {
    getNotice(this.setData)
  }

  setData(err, noticeData) {
    if (!err) {
      this.setState({ data: noticeData })
      console.log(noticeData)
    }
  }

  render() {
    return (
      <div>
        <h1>Auckland Transport Information Site</h1>
        <div className="flex-container" style={flexContainer}>
          {this.state.data.map(notice => {
            return <Notice data = {notice} key = {notice.id}/>
          })}
        </div>

      </div>
    )
  }
 }
//         <div>
//           <img src="http://c8.alamy.com/comp/E0HER5/the-new-auckland-transport-electric-train-on-its-first-day-of-operation-E0HER5.jpg" />
//         </div>