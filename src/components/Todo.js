import React, {PropTypes} from 'react';

const Todo = ({id, completed, onClick}) => (
    <div
        onClick={onClick}
        style={{
            width: 50, height: 50,
            backgroundColor: completed ? 'rgba(24, 171, 24, 0.54)' : 'rgba(119, 119, 119, 0.38)',
            border: '1px solid black', margin: 3,
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
        {id}
    </div>
);

export default Todo;