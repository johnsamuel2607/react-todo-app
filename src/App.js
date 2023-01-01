import React, { useState ,useEffect} from "react";
import "./style.css";
import ToDoForm from "./components/todo-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import ToDo from "./components/todo-list";
import Footer from "./components/footer";

function App() {

  const getLocalItems =()=>{
    let list = localStorage.getItem('list');
    console.log(list)

    if(list){
      return JSON.parse(localStorage.getItem('list'))
    }else {
      return []
    }
  }
  
  const [todo, setTodo] = useState(
    getLocalItems()
  );

  useEffect(() => {
   localStorage.setItem("list",JSON.stringify(todo))
  }, [todo]);



  const addTodo = (text) => {
    const newTodos = [...todo, { text, isDone: false }];
    setTodo(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todo];

    newTodos[index].isDone = !newTodos[index].isDone;

    setTodo(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todo];

    newTodos.splice(index,1)

    setTodo(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4"> ToDo List</h1>
        <ToDoForm addTodo={addTodo} />
        <br />
        <div className="todo">
          {todo.map((todo, index) => (
            <Card>
              <Card.Body>
                <ToDo todo={todo} index={index} markTodo={markTodo} deleteTodo={deleteTodo}/>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
