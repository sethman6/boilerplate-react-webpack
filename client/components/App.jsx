import React, { Component } from 'react'
import { Search } from './Search'
import { getYoda } from '../api'

export default class Yoda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.setYoda = this.setYoda.bind(this)
    this.handleOnclick = this.handleOnclick.bind(this)
    this.handleOnchange = this.handleOnchange.bind(this)
  }

  handleOnclick(e) {
    getYoda(this.setYoda)
  }

  setYoda(err, quoted) {
    if (!err) {
      this.setState({ 'quote': quotedvalue })
   } else (console.log ('Not Happening'))
  }
  }