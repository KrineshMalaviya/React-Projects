import React from 'react'
import './App.css'
import { useState } from 'react'


const Todo = () => {

    const [activity,setActivity] = useState('')
    const [listdata,setListdata] = useState([])
    const [isEdit, setIsEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    function handleAddOrUpdateList(){

        if(isEdit){
            const updatedList = listdata.map((elem, index) =>
                index === editIndex ? activity : elem
              );
              setListdata(updatedList);
              setIsEdit(false);
              setEditIndex(null);
        }else{
            setListdata((listdata)=>{
                const updateList = [...listdata,activity]
                setActivity('')
                return updateList
            })
        }
            
    }

    function editActivity(i) {
        setIsEdit(true);
        setEditIndex(i);
        setActivity(listdata[i]);
    }

    function removeActivity(i){
        const updateListData = listdata.filter((elem,index)=>{
             return i!=index
        })
        setListdata(updateListData)
    }

    
    function removeAllActivity(){
        setListdata([])
    }
  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Add Activity"
            onChange={(e) => setActivity(e.target.value)}
            value={activity}
            name="tasks"
          />
          <button onClick={handleAddOrUpdateList}>
            {isEdit ? 'Update' : 'Add'}
          </button>
        </div>

        <div className="todo-list">
          {listdata.map((elem, i) => (
            <div className="todo-item" key={i}>
              <div>{elem}</div>
              <button onClick={() => removeActivity(i)}>Remove</button>
              <button onClick={() => editActivity(i)}>Edit</button>
            </div>
          ))}
        </div>

        {listdata.length >= 1 && (
          <button className="remove-all-btn" onClick={removeAllActivity}>
            Remove All
          </button>
        )}
      </div>
    </>
  )
}

export default Todo
