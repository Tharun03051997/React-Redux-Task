import React from "react";


function TextInput ({
    placeholder="",
    value ="",
    onChange=() =>{},
    id="",
    name=""
})
{
    return (
       <input
       placeholder={placeholder}
       value ={value}
       onChange={onChange}
       id={id}
       name={name}  
         />
    );
}

export default TextInput;