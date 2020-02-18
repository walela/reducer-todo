import React from 'react'
import { TodoItem } from './TodoItem'

const TodoList = props => {
  return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      {props.todos.map(todo => {
        return <TodoItem todo={todo} />
      })}
    </div>
  )
}

export default TodoList
