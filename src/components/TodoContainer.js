import React, {Component, PropTypes} from 'react';
import Todo from './Todo'

class TodoContainer extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.todo.completed !== this.props.todo.completed;
    }

    render() {
        const {todo, toggleCompleted} = this.props;
        console.log('rendering')
        return <Todo
            toggle={() => toggleCompleted(todo.id)}
            completed={todo.completed}
            id={todo.id}
        />
    }
}

export default TodoContainer;