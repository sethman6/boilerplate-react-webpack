import React, { Component } from 'react'
import { searchBar } from './Search'
import { getYoda } from '../api'

export default class setYoda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    // this.setYoda = this.setYoda.bind(this)
    this.handleOnclick = this.handleOnclick.bind(this)
    this.handleOchange = this.handleOnchange.bind(this)
  }

  handleOnchange(e , err) {
    if (!err) {
      this.setState({query: e.target.value})
    } else console.log(err.message)
  }

  handleOnclick(e , err) {
    if(!err){
    this.props.setYoda(this.state.query)
    }else console.log(err.message)
  }

  // setYoda(err, quoted) {
  //   if (!err) {
  //     this.setState({ 'quote': quotedvalue })
  //   } else (console.log(err.message))
  // }

  // getSearch(err, quoted) {
  //   if (!err) {
  //     this.setState({ 'search': searchedvalue })
  //   } else (console.log(err.message))
  // }
  render (){
    return (
  <div>
    <form>
    <div className = 'Title' ><h1> <b>Sethman's Movie PRoject using React</b></h1> </div>
    <div className = 'field'> 
    <label className="label">Find a Movie</label>
    <p className="control">
      <input className="input" type="text" onChange={this.handleOchange}/> </p>
      </div>
      <p className = "control">
        <button className="button" onClick={this.handleOnclick}> Search Movies </button>
        </p>
     </form>
      <p><img src = "./Movies.png" /> </p>
</div>
    )
  }
}