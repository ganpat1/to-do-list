import React from 'react'
import "./App.css"
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoList=(props)=>{

  

return<>
<div className="deleteItem" > 
<li>{props.text}</li>
<button className='dltbtn' onClick={()=>{props.onSelect(props.id)}}>-</button>
</div>
</>

    
}

export default  ToDoList;
