import axios from 'axios'
import React, { PureComponent } from 'react'
import store from '../store'

import {
  incAction,
  addAction
  
}from '../store/actionCreators'
export default class home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter:store.getState().counter
    }
  }

  componentDidMount() {
    axios({
      url:"http://123.207.32.32:8000/home/multidata"
    }).then(res=>{
      console.log(res)
    })
   
  }
  render() {
    let {counter}=this.state
    return (
      <div>
        home
        <h2>
          当前计数:{counter}
          <button onClick={e => this.increment()}>+1</button>
          <button onClick={e => this.addNumber(5)}>+5</button>
        </h2>
      </div>
    )
  }
  increment() {
    store.dispatch(addAction(1))
    
  }
  addNumber(num) {
    store.dispatch(addAction(num))
  }
}
