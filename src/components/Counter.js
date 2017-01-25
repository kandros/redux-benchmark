import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  render() {
    const { value, increment, decrement } = this.props
    return (
      <p>
        Counter: {value}
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
      </p>
    )
  }
}

export default connect(state => ({
    value: state
}), {increment, decrement})(Counter)
