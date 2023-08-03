import React from "react";
import { Button } from "./Button.style";

function BasicCta ({text="",onClick=()=>{}})
{
    return (
        <div>
    <Button background={"red"} onClick={onClick}>{text}</Button>
    </div>
    )
}

export default BasicCta;