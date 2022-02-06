/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2022
 */

import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const style = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(props) {
    return (
        <ul style={style.ul}>
            {props.todos.map((todo, idx) => {
                return (
                    <TodoItem
                        todo={todo}
                        idx={idx}
                        key={todo.id}
                        onChange={props.onToggle}
                    />
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList
