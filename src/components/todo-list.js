import React from 'react';
import { Button } from 'react-bootstrap';
import "./todo.css";

function ToDo({todo,index,markTodo,deleteTodo}) {


    const {text, isDone} = todo ;

 

  return (
    <div className='todo-card'>

        <span
         style={{textDecoration: isDone ? "line-through" : " "}}>
        {text}
        </span>

<div className='todo-button'>
<Button  onClick={()=>markTodo(index)}>{isDone ?  "NotDone" : " Done"}</Button>
        <Button variant='danger' onClick={()=>deleteTodo(index)}>Delete</Button>
</div>
     


    </div>
  )
}

export default ToDo