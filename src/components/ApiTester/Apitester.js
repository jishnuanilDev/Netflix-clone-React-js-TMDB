import React, { useState } from 'react'
import axios from 'axios';

function Apitester() {

    const [state,setState] = useState([])
    const DummyJson = ()=>{
        axios.get('https://dummyjson.com/products').then((Response)=>{
     
      setState(Response.data.products)
    
        })
    }
    
  return (
    <div>
<h1 style={{color:'white'}}>Api test</h1>




        <button onClick={DummyJson}>Click here</button>
      
        {
       state.map((obj,index)=>{
            return(
                <h2 style={{color:'white'}}>{index}: {obj.title}</h2>
            )
        })
        }
    </div>
  )
}

export default Apitester
