import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import Create from './Create';

function Home() {
    const [todos,setTodos] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    },[])

    const handleEdit = (id) =>{
      axios.put('http://localhost:3001/update/'+id)
      .then(location.reload())
      .catch(err => console.log(err))
    }

    const handleDelete = (id) =>{
      axios.delete('http://localhost:3001/delete/'+id)
      .then(location.reload())
      .catch(err => console.log(err))
    }

  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create></Create>
      {
        todos.length === 0
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
            <div className='task' key={todo._id}>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ?
                  <BsFillCheckCircleFill className='icon'/>
                : <BsCircleFill className='icon'/>} 
                <p className={todo.done ? 'line_through':''}>{todo.task}</p>
              </div>
              <div onClick={() => handleDelete(todo._id)}>
                <span><BsFillTrashFill className='icon'/></span>
              </div>
            </div>
        ))
      }
    </div>
  )
}

export default Home
