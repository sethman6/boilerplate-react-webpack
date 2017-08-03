import React from 'react'
import Notice from './Notice'
import getNotice from '../api'

const flexContainer = {
  display: "flex",
  flexDirection:"column"
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: []
//     }
//     this.setData = this.setData.bind(this)
//   }

//   componentDidMount() {
//     getNotice(this.setData)
//   }

//   setData(err, noticeData) {
//     if (!err) {
//       this.setState({ data: noticeData })
//       console.log(noticeData)
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Sethman's Personal Project using React and API</h1>
//         <div className="flex-container" style={flexContainer}>
//           {this.state.data.map(notice => {
//             return <Notice data = {notice} key = {notice.id}/>
//           })}
//         </div>

//       </div>
//     )
//   }
//  }
// //         <div>
// //           <img src="http://c8.alamy.com/comp/E0HER5/the-new-auckland-transport-electric-train-on-its-first-day-of-operation-E0HER5.jpg" />
// //         </div>

//New code

const style = {
  width: "50%"
}

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      quote: ""
    }

    this.setQuote = this.setQuote.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    //this.style = {styling}      this. refers to the class.
  }
  handleOnClick(e) {
    getQuote(this.setQuote)
  }

  setQuote(err, quoted) {
    if (!err) {
      this.setState({ 'quote': quoted.value })
    } else (console.log('quote not recieved'))

  }

  render() {
    return (
      <div id='page'>
        <div className='title'><h1> Sethman's Personal Project using React and API</h1></div>
        <div className='trump-button'>
          <button onClick={this.handleOnClick}>
            <img src="./Tronald_Dump.png" alt="Not working" style={style} />
            {/*this would ebcome this.style*/}
          </button>
        </div>
        {this.state.quote && <div className='quote'>
          <p key={1}>
            {this.state.quote}
          </p>
          <p>
            - Tronald Dump
          </p>
        </div>}

      </div >
    )
  }
}


