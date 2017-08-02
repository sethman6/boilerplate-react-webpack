import React from 'react'
import {} from '../api'
import data from 'data'


export default class App extends React.Component {
constructor (props){
  super (props)
  this.state = {
  }
  this.setData = this.setData.bind(this)
}

componentDidMount() {
  getData(this.setData)
}

getData (err , data){
this.setstate(data : data)
})

render ()
  return(
    <div>
    <h1>Auckland Transport Infomation Site</h1>
    <h2>{this.set.data.title}</h2>
    <h3> {this.set.data.description}</h3>
    </div>

  })


export default App
