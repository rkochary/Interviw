import React from 'react'

export default function TodoFooter({todos,onClearChecked}) {

  return (
    <div>
        <button onClick={onClearChecked}>Delete</button>
    </div>
  )
}
