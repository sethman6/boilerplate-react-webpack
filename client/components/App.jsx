import React from 'react'
import Notice from './Notice'
import getNotice from '../api'

const flexContainer = {
  display: "flex",
  flexDirection:"column"
}
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
        <div className='Project-button'>
          <button onClick={this.handleOnClick}>
            <img src="./tictactoe.png" alt="Not working" style={style} />
            {/*this would ebcome this.style*/}
          </button>
          <button onClick={this.handleOnClick}>
            <img src="./yoda.png" alt="Not working" style={style} />
            {/*this would ebcome this.style*/}
          </button>
        </div>
        {this.state.quote && <div className='quote'>
          <p key={1}>
            {this.state.quote}
          </p>
          <p>
            - Sethman
          </p>
        </div>}

      </div >
    )
  }
}


