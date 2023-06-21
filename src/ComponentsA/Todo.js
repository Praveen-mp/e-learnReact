import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
function createTodo(){
    const initialTodos=[];
    for(let i=0;i<1;i++){
        initialTodos.push(
            {
              id:i,
              text:'Nothing' + (i+1)
            }
            
        ) 
    }
    return initialTodos;
}
export default function Todo() {
    const [todo,setTodo] = useState(createTodo);
    const [text,setText]=useState('');

  return (
    <>
        <input value={text} onChange={e=> setText(e.target.value)}/>
        <Button bgColor='primary'
        
         onClick={()=>{
          setText('');
          setTodo([{
          id:todo.length,
          text:text
        }, ...todo]);
        }}>add todo</Button>
        <ul>
         {todo.map(todos=>(
             <li key={todos.id}>
              {todos.text}
             </li>
         ))}
        </ul>
    </>
  )
}
