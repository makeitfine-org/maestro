import React from "react"
import TodoList from "./todo/TodoList"
import AddTodo from "./todo/AddTodo"
import Context from "./context";

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

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title: title,
            id: Date.now(),
            completed: false,
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className='wrapper'>
                <h1>React todos</h1>
                <AddTodo onCreate={addTodo}/>
                <hr/>
                {todos.length
                    ? <TodoList todos={todos} onToggle={toggleTodo}/>
                    : <p>no todos</p>
                }
            </div>
        </Context.Provider>
    )
}

export default App;
