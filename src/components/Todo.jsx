import React from 'react';
import firebase from './firebase';
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Todo({ todo }) {
  
  let [temp , setTemp] = useState('')
  const handleOnTotal = (e) =>{
    setTemp(e.target.value)
  }
  const handleSubmit =() =>{
    let total= Number(todo.amount) + Number(temp);
    console.log(total)
  }
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Customer').child(todo.id);
    todoRef.remove();
  };
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);  };
  return (
    <div className='container'>
            <div className="box1"></div>
      <div className="box">
      <h1>{todo.cname}</h1>
      <button onClick={deleteTodo} className='button1'><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" alt='Delete'/></button>
      <button onClick={handleToggle} className={isActive ? null : 'invert'}><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-down-arrow-arrows-dreamstale-lineal-dreamstale-2.png"/></button>
      <hr></hr>
      <div className={isActive ? "hide" : 'show'}>
      <form className='ui form'>
          <select  onChange={handleOnTotal} className="field">
          <option value=''>select</option>
          <option value="50">1 litre</option>
          <option value="37.5">3/4 litre</option>
          <option value="25">1/2 litre</option>
          <option value="12.5">1/4 litre</option>
          </select>
          </form>
          <button onClick={handleSubmit} className='ui button green'>Done</button>
      <h3>{todo.amount}<br></br></h3>
      
      </div>
      
      </div>

    </div>
  );
}
