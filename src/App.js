import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {useState} from "react";
import TodoListContainer from "./Components/TodoListContainer";
import AddTodo from "./Components/AddTodo";

function App() {
const [toDoItems,setTodoItems] = useState([]);
let addItem = (item) => {
  setTodoItems([...toDoItems,item])
}
return (
  <ParentContainer>
    <AddTodo addItem={addItem}/>
    <TodoListContainer toDoItems = {toDoItems}/>
  </ParentContainer>
);
  

}
const ParentContainer = styled.div`
  display:flex;
  height:300px;
  align-items:center;
  width:900px;
  position:relative;
  top:200px;
  left:400px;
`;

export default App;
