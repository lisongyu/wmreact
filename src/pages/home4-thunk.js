
import React, { PureComponent } from 'react'


import {
  incAction,
  addAction,
  getHomeMultidataAction
  
}from '../store/actionCreators'
import { connect } from '../utils/connect'
 class Home extends PureComponent {


  componentDidMount() {
   this.props.getHomeMultidata()
   
  }
  render() {
  
    return (
      <div>
        home
        <h2>
         
          <button onClick={e => this.increment()}>+1</button>
          <button onClick={e => this.addNumber(5)}>+5</button>
        </h2>
      </div>
    )
  }

}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispachToProp = dispatch => {
  return {
    increment() {
      dispatch(incAction())
    },
    addNumber(num) {
      dispatch(addAction(num))
    },
    getHomeMultidata(){
      dispatch(getHomeMultidataAction)
    }
  }

};

export default connect(mapStateToProps, mapDispachToProp)(Home)
