import React, { useState } from 'react'
import './todo.css'

const Todolist = () => {
    const [inputVal,setInputVal] = useState('');
    const [todoList,setTodoList] = useState([])
    const [editMode,setEditMode] = useState(false)
    const [editId,setEditId] = useState(null);
    const [editValue,setEditValue] = useState('');

    const addTodo = () =>{
        if(inputVal.trim() !== ''){
            const todoItem = {
                id: new Date().getTime(),
                task: inputVal,
            }
            setTodoList([...todoList,todoItem])
            setInputVal('');
        }
    }

    const deleteTodo = (id) =>{
        const updatedTodo = todoList.filter((todo)=>todo.id !== id)
        setTodoList(updatedTodo)
    }

    const EditTodo = (id,task) =>{
        setEditMode(true)
        setEditId(id)
        setEditValue(task)
    }

    const updateTodo = () =>{
        const updatedTodos = todoList.map((todo)=>{
            if(todo.id === editId){
                return {...todo,task:editValue}
            }
            return todo
        });
        setTodoList(updatedTodos)
        setEditMode(false);
        setEditId(null)
        setEditValue('')
    }

    const addTodoOnEnter = (e) =>{
        if(e.key === 'Enter'){
            if(!editMode){
                addTodo()
            } else {
                updateTodo()
            }
        }
    }
  return (
    <div className='todo-container'>
        <h1>Todo List</h1>
        <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} onKeyDown={addTodoOnEnter}/>
        {
            editMode ? (
                <div>
                <input type="text" value={editValue} onChange={(e)=>setEditValue(e.target.value)} onKeyDown={addTodoOnEnter} />
                <button onClick={updateTodo}>Update</button>
                </div>
            ) : (
                <button onClick={addTodo}>Add</button>
            )
        }
        
        <div className='todo-list'>
            <ul>
                {todoList.map((todo)=>{
                    const {id,task} = todo;
                    return <li key={id}>{task} <div><button onClick={()=>deleteTodo(id)}>Delete</button> <button onClick={()=>EditTodo(id,task)}>Edit</button></div></li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Todolist