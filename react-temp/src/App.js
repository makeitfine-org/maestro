import React, {useEffect} from "react"
import TodoList from "./todo/TodoList"
import Context from "./context"
import Loader from "./todo/Loader"
import Modal from './modal/Modal'
// import AddTodo from './todo/AddTodo'

const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(import('./todo/AddTodo')), 2500)
}))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 1500)
            })
    }, [])

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

                <Modal/>

                <React.Suspense fallback={<Loader/>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>

                <hr/>

                {loading && <Loader/>}
                {todos.length
                    ? <TodoList todos={todos} onToggle={toggleTodo}/>
                    : (
                        loading ? null : <p>no todos</p>
                    )
                }
            </div>
        </Context.Provider>
    )
}

export default App;
