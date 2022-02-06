import React from "react";
import TodoList from "./todo/TodoList";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Buy bread'},
        {id: 2, completed: true, title: 'Buy juice'},
        {id: 3, completed: false, title: 'Buy oil'}
    ])

    function toggleTodo(id) {
        setTodos(todos.map(
            todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed

                }
                return todo
            })
        )
    }

    return (
        <div className='wrapper'>
            Hi, there!!!
            <hr/>
            <TodoList todos={todos} onToggle={toggleTodo}/>
        </div>
    );
}

export default App;
