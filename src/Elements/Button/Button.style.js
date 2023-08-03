import styled from 'styled-components'


const Button = styled.button`
width: 100px;
height: 50px;
background:${(props) =>props.background||"green"};
color: #ffffff;
border: none;
outline: none;
border-radius: 5px;
padding:  10px 20px;
`

export {Button};