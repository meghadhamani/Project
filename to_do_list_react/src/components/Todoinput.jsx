import React from 'react'
import { useState } from 'react'
const Todoinput = (props) => {
  const [inputtext,setinputtext]=useState()
  return (
    <div >
      <input type="text" 
             placeholder="enter your todo"
             value={inputtext}
             onChange={e=>{setinputtext(e.target.value)}} />
            <button onClick={()=>{
             props.addList(inputtext) 
              setinputtext('')
            }}>Add</button>
    </div>
  )
}

export default Todoinput