import styled from 'styled-components'


const Input = styled.input`
width: auto;
height: 50px;
outline: none;
border: 1px solid grey;
outline: none;
border-radius: 5px;
padding-inline-start:  10px;
margin-bottom: ${(props)=>props.marginBottom}
font-size: 1 rem;
`;

export {Input};