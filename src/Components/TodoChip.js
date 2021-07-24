import styled from "styled-components";
const ChipContainer = styled.div`
height:50px;
position:relative;
margin-bottom:10px;
padding-left:10px;
padding-top:5px;
border-radius:10px;
border: 1px solid grey;
`;
const ChipTitle = styled.h4`
margin-top:0px;
margin-bottom:0px;
font-size:15px;
color:Black;
`;
const ChipDescription = styled.span`
font-size:12px;
color:cornflowerblue;
`;
const TodoChip = (props) => {
    console.log(props.info);
return(
    <ChipContainer>
        <ChipTitle>{props.info.title}</ChipTitle>
        <ChipDescription>{props.info.description}</ChipDescription>
    </ChipContainer>
)    
}

export default TodoChip;