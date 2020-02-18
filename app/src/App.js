import React, { useReducer } from 'react'
import { reducer, initialState } from './reducers/TodoReducer'
import TodoList from './components/TodoList'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoList todos={state.todos} />
    </div>
  )
}

export default App
