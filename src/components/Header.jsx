import React, { useState } from 'react'
import firebase from './firebase'
import './nav.css' 
export default function Header() {
    const [cname,setName] =useState('');
    const amount =0;
    const handleOnChange = (e) =>{
        setName(e.target.value);
    }
    const createTuto = () =>{
        if(cname ===""){
            alert("Enter valid details")
        }
        else{
        console.log("smart")    
        const todoRef = firebase.database().ref("Customer");
        const todo ={
            cname,
            amount
        };
        todoRef.push(todo)
        setName("");
    }
}
  return (
    <div>
        <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
  <ul>
    <li>Analysis</li>
    <li>Income</li>
    <li>setting</li>
  </ul>
</nav>
<div className='ui form' id='searchbar'>
<input type="text" placeholder='Add customer' onChange={handleOnChange}/>
<button className='ui button grey' onClick={createTuto}>Add</button>
</div>
    </div>
  )
}
