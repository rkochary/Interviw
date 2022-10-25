import React from 'react'

export default function TodoItem({todo,onChange,onDelete,onEdit}) {
  return (
    <div>
      <label>
        <input type='checkbox' checked={todo.isChecked} onChange={(e) =>{ 
          onChange({
            ...todo,
            isChecked: e.target.checked
          })}
        } />
        <input type='text' value={todo.name} disabled={todo.isEdit}/>

        <button onClick={() => 
          onDelete(todo)
        }>X</button>
        <button onClick={() => onEdit({
          ...todo,
          isEdit:!todo.isEdit
        })}>Edit</button>
      </label>
    </div>
  )
}
