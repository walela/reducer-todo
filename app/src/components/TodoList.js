import React from 'react'
import { TodoItem } from './TodoItem'

const TodoList = props => {
  return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      {props.todos.map(todo => {
        return <TodoItem key={todo.id} text={todo.item} />
      })}
    </div>
  )
}

export default TodoList
