import React from 'react'
import { useState } from 'react'

export default function TodoItem({todo,onChange,onDelete,onEdit}) {

  const [text,setText] = useState(todo.name)
  console.log('text',text)

  return (
    <div>
      <label>
        <input type='checkbox' checked={todo.isChecked} onChange={(e) =>{ 
          onChange({
            ...todo,
            isChecked: e.target.checked
          })}
        } />
        <input type='text' value={text} disabled={todo.isEdit}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => 
          onDelete(todo)
        }>X</button>
        <button onClick={() => onEdit({
          ...todo,
          isEdit:!todo.isEdit
        })}>{todo.isEdit?"Edit":"Save"}</button>
      </label>
    </div>
  )
}
