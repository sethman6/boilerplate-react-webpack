import React, { Component } from 'react'
import { searchBar } from './Search'
import { getYoda } from '../api'

export default class Yoda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: ''    }

    this.setYoda = this.setYoda.bind(this)
    this.handleOnclick = this.handleOnclick.bind(this)
    this.handleOchange = this.handleOnchange.bind(this)
  }

  handleOnclick(e) {
    getYoda(this.state.setYoda)
  }

  handleOnchange(e) {
    this.setState({
      movie: e.target.value
    })
  }


  setYoda(err, quoted){
    if (!err) {
      this.setState({ 'quote': quotedvalue })
    } else (console.log(err.message))
  }

  getSearch(err, quoted) {
    if (!err) {
      this.setState({ 'search': searchedvalue })
    } else (console.log(err.message))
  }

  render () {
    return (
      <div>
              <title> <b> <h1>Sethman's PeRsonal Project using React </h1> </b> </title>

         <form>
          <div className="field">
            <label className="label">Movie Finder</label>
            <p className="control">
              <input className="input" type="text" onChange={this.handleChange} />
            </p>
          </div>
          <p className="control">
            <button className="button" onClick={this.handleClick}>Search A Movie</button>
          </p>
        </form>
      </div>
    )
  }
}
