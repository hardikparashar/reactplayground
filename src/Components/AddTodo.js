import React,{useState} from "react";
import styled from "styled-components";


const InputContainer = styled.div`
height:50px;
padding:0 10px 10px 10px;
`
const InputFields = styled.input`
height:20px;
padding:0 10px 10px 10px;
`
const AddTodo = ({addItem}) => {
    let [item,setItem] = useState({});
    // const addItem = (e) => {
        
    // }
return (
    <>
    <InputContainer>
        <span>Title:</span><InputFields className="to-do-input" placeholder="Enter your title here.."name="title" onChange={(e)=>{setItem({...item,title:e.target.value})}}/>
        <span>Description:</span><InputFields className="to-do-input" placeholder="Enter your description here.." name="description" onChange={(e)=>{setItem({...item,description:e.target.value})}}/>
    
        <button style={{display:"block"}}onClick={()=>{
            addItem(item)
        }}>+Add</button> 
        </InputContainer>
    </>
);
}
export default AddTodo;