import React, { Component } from 'react'
import { searchBar } from './Search'
import { getYoda } from '../api'

export default class Yoda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.setYoda = this.setYoda.bind(this)
    this.handleOnclick = this.handleOnclick.bind(this)
    this.handleOchange = this.handleOnchange.bind(this)
  }

  handleOnclick(e) {
    getYoda(this.setYoda)
  }

  handleOnchange(e) {
    searchBar(this.getSearch)
  }

  setYoda(err, quoted) {
    if (!err) {
      this.setState({ 'quote': quotedvalue })
    } else (console.log(err.message))
  }

  getSearch(err, quoted) {
    if (!err) {
      this.setState({ 'search': searchedvalue })
    } else (console.log(err.message))
  }
  render (){
    return (
  <div>
    <div className = 'Title' ><h1> <b>Sethman's Movie PRoject using React</b></h1> </div>
    <div className = 'button'> </div><form> Enter Movie Name <input/>
    <button onClick = {this.handleOnclick}> Submit </button>
    <button onChange = {this.state.search}>
    </button> </form> <p>
     <img src = "./Movies.png" /> </p>
</div>
    )
  }
}