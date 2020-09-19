import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';

const TodoInput = ({ value, onChange, onKeyPress }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </div>
)

TodoInput.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
}
  
TodoInput.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
}
export default TodoInput;