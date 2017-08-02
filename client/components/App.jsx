import React from 'react'
import data from 'data'
import getNotice from '../api'


export default class App extends React.Component {
    constructor (props){
        super (props)
        this.state = {
            data: {}
        }
        this.setData = this.setData.bind(this)
    }

    componentDidMount() {
        getNotice(this.setData)
    }

    setData(err , noticeData){
        if (!err) {
            this.setState({data : noticeData})
        }
    }

    render (
        return(
            <div>
              <h1>Auckland Transport Infomation Site</h1>
              <h2>{this.set.data.title}</h2>
              <h3> {this.set.data.description}</h3>
            </div>

        ))
}

export default App
