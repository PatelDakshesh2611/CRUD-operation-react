import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {  useParams } from "react-router-dom";
const Update = () => {
  const id = useParams().id;
  console.log(id)

  const[button,updb]=useState(1)

  const [name,updn]=useState('')
  const [email,upde]=useState('')
  const [age,upda]=useState('')
  const[isActive,updia]=useState('')
  

  const submit= async(e)=>{
    e.preventDefault()
    updb(0)
    var data={
      
      name:name,
      email:email,
      age:age,
      isActive:isActive==='true'?true:false
   
    }
    var res=await axios.put("https://node5.onrender.com/user/user/"+id,data)
    console.log(res)
    updb(1)
    alert('Your data is updated in our database')
  }

  return (
    <div>
     <form>
      <label htmlFor="exampleInputtext" className="form-label" >
      Enter your name
    </label>
      <input required onChange={(e)=>updn(e.target.value)}
      type="text"
      className="form-control"
      id="exampleInputtext"
      aria-describedby="emailHelp"
    /><br/>
    
    <label htmlFor="exampleInputtext2" className="form-label">
      Enter your Age
    </label>
      <input required onChange={(e)=>upda(e.target.value)}
      type="text"
      className="form-control"
      id="exampleInputtext2"
      aria-describedby="emailHelp"
    /><br/>
   IsActive: Yes<input type="radio" onClick={(e)=>{updia(e.target.value)}} name="ud" value={'true'} id="ud" />    No<input type="radio" onClick={(e)=>{updia(e.target.value)}}  name="ud" value={'false'} id="ud" /><br /><br /> 

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input required onChange={(e)=>{upde(e.target.value)}}
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div><br />
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
{
    button?<button type="submit" className="btn btn-primary" onClick={(e)=>{submit(e)}}>
    Submit
  </button>:<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
}
</form>

    </div>
  )
}

export default Update
