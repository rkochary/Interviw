import './App.css';
import TodoList from './TodoList';
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {

  const [todos,setTodos] = useState([]);

  return (
    <div className="App">
        <TodoForm onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id:Math.random(),
              name:text,
              isChecked:false,
              isEdit:true
            }
          ])
        }}/>
        <TodoList 
        todos={todos}
        onChange={(newTodo) => {
          setTodos(todos.map(todo => {
            if(todo.id === newTodo.id){
              return newTodo
            }
            return todo
          }
          )
          )
        }}
        onDelete={(todo) => {
            setTodos(todos.filter(t => t.id !== todo.id))
        }}
          onEdit={(newTodo) => {
            setTodos(todos.map(todo => {
              if(todo.id === newTodo.id){
                return newTodo
              }
              return todo
            }
            )
            )
          }}
        />
        <TodoFooter onClearChecked={() => {
         setTodos(todos.filter(todo => !todo.isChecked))
        }}/>
    </div>
  );
}

export default App;
