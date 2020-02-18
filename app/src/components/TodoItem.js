import React from 'react'

const TodoItem = ({ todo }) => {
  return <div className='todo-item'>{todo.item}</div>
}

export { TodoItem }
