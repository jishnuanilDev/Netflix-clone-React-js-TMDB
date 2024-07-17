import React, { useCallback, useState } from "react";


function Counter(){
    const [count,setCount] = useState(0);



    return(
        <h1>

            <button onClick={()=>{
                useCallback(()=>{
                    setCount(count+1);
                    },[count])
            }} >Click</button>
        </h1>
    )
}