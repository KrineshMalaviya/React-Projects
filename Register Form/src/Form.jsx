import React, { useEffect, useState } from 'react'
import './App.css'

const Form = () => {

    const data = {name:'',email:'',password:''}
    const [inputdata,setInputdata] = useState(data)
    const [flag,setFlag] = useState(false)

    useEffect(()=>{
        console.log("Register")
    },[flag])

    function handleChange(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        if(!inputdata.name || !inputdata.email || !inputdata.password){
            alert("Reqired all the fields ❌")
        }else{
            setFlag(true)
        }
    }
  return (
    <div>
        <pre>{(flag)?<h1>{inputdata.name} Succesfully Registerd ✅</h1>:''}</pre>
        <form className='container' onSubmit={handleSubmit}>
            <div>
                <h1>Registration Form</h1>
            </div>
            <div>
                <input type='text' value={inputdata.name} onChange={handleChange} name='name' placeholder='Enter Your Name'/>
            </div>
            <div>
                <input type='email' value={inputdata.email} onChange={handleChange} name='email' placeholder='Enter Your Email'/>
            </div>
            <div>
                <input type='password' value={inputdata.password} onChange={handleChange} name='password' placeholder='Enter Your Password'/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form
