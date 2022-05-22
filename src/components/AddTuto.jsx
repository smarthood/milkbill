import React, { useState } from 'react'
import firebase from './firebase'
import '../App.css';
import { useNavigate } from 'react-router-dom'
function AddTuto() {
let navigate=useNavigate();
    const [cname,setName] =useState('');
    const nhandleOnChange = (e) =>{
        setName(e.target.value);
    }
    const [ndate,setDate] =useState('');
    const handleOnChange = (e) =>{
        setDate(e.target.value);
    }
    const [litre,setLitre] =useState('');
    const lhandleOnChange = (e) =>{
        setLitre(e.target.value);
    }
    const createTuto = () =>{
        if(cname ===""){
            alert("Enter valid details")
        }
        else{
        const todoRef = firebase.database().ref(cname);
        const todo ={
            ndate,
            litre
        };
        todoRef.push(todo);
        setDate('');
        setLitre('');
    }
    const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('Customer');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
    };
    return (
          <div className="container">
            <div className="ui main">
                <form className='ui form'>
            <label>Customer Name:<br />
          <input type="text" onChange={nhandleOnChange}/><br />
          </label>
          <label>Date:
              <input type="date" onChange={handleOnChange} />
          </label>
          <label>Reqular Amount(l): <br />
          <select  onChange={lhandleOnChange}>
          <option value='0'>select</option>
          <option value="1">1 litre</option>
          <option value="0.75">3/4 litre</option>
          <option value="0.5">1/2 litre</option>
          <option value="0.25">1/4 litre</option>
          </select>
          </label>
          </form>
        <button onClick={createTuto} className='ui button green'>Done</button>
        <button onClick={() => navigate(-1)} className='ui button green'>Back</button>
            </div>
        </div>
  );
}

export default AddTuto;