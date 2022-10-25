import React from 'react'
import { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList({todos,onChange,onDelete,onEdit}) {
    console.log("todos",todos)
  return (
    <div>
        {todos.map(todo => {
            return <TodoItem 
            key={todo.id}
            id={todo.id} 
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
            onEdit={onEdit}
            />
        })}
      </div>
  )
}
