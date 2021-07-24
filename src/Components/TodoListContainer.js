import TodoChip from "./TodoChip";
import styled from "styled-components";
const Listcontainer = styled.div`
width:300px;
padding:0 10px 10px 10px;
`

const TodoListContainer = (props) => {
    console.log("HOEYAAAAA",props.toDoItems);
return(
    <Listcontainer>
 
    {props.toDoItems.map(item=>{
       return  <TodoChip  info={item}/>
    })}
   
    </Listcontainer>

)
}
export default TodoListContainer;