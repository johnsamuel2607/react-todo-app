import React  from 'react'
import {Form,Button} from 'react-bootstrap'
import { useState } from 'react'

function ToDoForm({addTodo}) {
const [value,setValue] = useState('')

const handleSubmit =(e)=>{
e.preventDefault();
if(!value) return;
addTodo(value);
setValue('');
}


  return (
<div>
<Form onSubmit={handleSubmit}>
    <Form.Group>
        <Form.Label>
            <b>Add ToDo</b>
        </Form.Label>
        <Form.Control 
        type='text'
        className='input'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="EnterToDo"
        
        />

        <br/>
        <Button type='submit'>Submit</Button>
   
    </Form.Group>
</Form>


</div>

  )
}

export default ToDoForm