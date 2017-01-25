import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {setTodos} from '../actions';
import {createTodos} from '../utils/todoUtils';

class SetTodosContainer extends Component {
    state = {
        value: 200
    }
    _handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    _setTodos = () => {
        let num;
        num = this.state.value


        //  window.performance.memory.jsHeapSizeLimit
        // if(num => 1239999999) {
        //     num = 1529999999
        // }

        const todos = createTodos(
            parseInt(num)
        );
        this.props.setTodos(todos)
    }

    componentDidMount() {
        this._setTodos()
    }

    componentDidUpdate() {
        this._setTodos()
    }

    render() {
        return (
            <div>
                Todos:
                <input
                    value={this.state.value}
                    onChange={this._handleChange}
                />
            </div>
        );
    }
}

export default connect(null, {setTodos})(SetTodosContainer);