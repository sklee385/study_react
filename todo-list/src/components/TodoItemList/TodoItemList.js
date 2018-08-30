import React, { Component } from 'react';
import './TodoItemList.css';
import TodoItem from '../TodoItem/TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    key={id}
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        );
    }
}


export default TodoItemList;