import React from 'react';
import {Footer, TodoList, TodoInput} from '../../components';

import {addTask , removeTask, completeTask, changeFilter} from '../../actions/actionCreator'
import {connect} from 'react-redux'

import './todo.css';
  

class Todo extends React.Component {
    state = {
        taskText: ''
    }

    handleInputChange = ({target: {value}}) => {
        this.setState({
            taskText: value
        }) 
    }

    addTask = ({key}) => {
        const {taskText} = this.state 
        if (taskText.length > 3 && key === 'Enter') {
            const {addTask} = this.props;

            addTask((new Date()).getTime(), taskText, false)

            this.setState({
                taskText: ''
            })
        }
    }
    
    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed': 
                return tasks.filter(task => task.isCompleted)
            case 'active':
                return tasks.filter(task => !task.isCompleted)
            default:
                return tasks
        }
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length


    render() {
        const { taskText } = this.state;
        const {tasks, removeTask, completeTask, filters, changeFilter} = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters)
        const taskCounter = this.getActiveTasksCounter(tasks)

        return (
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
                {isTasksExist && <TodoList completeTask={completeTask} removeTask={removeTask} tasksList={filteredTasks} />}
                {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
            </div>
        );
    }
}

const mapStateToProps = ({tasks, filters}) => ({
    tasks,
    filters
})

export default connect(mapStateToProps, {addTask, removeTask, completeTask, changeFilter})(Todo);