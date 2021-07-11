import React, { PureComponent } from 'react'
import {
  decAction,
  subAction

} from '../store/actionCreators'
import { connect } from '../utils/connect'
function About(props) {
  return (
    <div>
      about
      当前计数:{props.counter}
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispachToProp = dispatch => {
  return {
    decrement: function () {
      dispatch(decAction())
    },
    subNumber: function (num) {
      dispatch(subAction(num))
    }
  }

};

export default connect(mapStateToProps, mapDispachToProp)(About)
