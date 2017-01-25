import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoContainer from './TodoContainer';
import {toggleCompleted} from '../actions'


const ConnectedListComponent = ({todos, toggleCompleted}) => (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {todos.map(t => (
            <TodoContainer
                todo={t}
                toggleCompleted={toggleCompleted}
                key={t.id}
            />
        ))}
    </div>
);

export default connect(state => ({
    todos: state.todos
}), {toggleCompleted})(ConnectedListComponent)