import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Star.css'
const Component1 = () => {
  const[id_id,updid]=useState()
 
   const [flag,upd1]=useState(0)
   const [data,upd]=useState()
   const getdata=async()=>{
   const res= await axios.get("https://node5.onrender.com/user/user")
   console.log(res.data.data)
   upd(res.data.data)
   upd1(1)
   upd3(0)
   
   }
   const deletee=async(id)=>{
    updid(id)
    upd3(1)
    var res=await axios.delete('https://node5.onrender.com/user/user/'+id)
    console.log(res)
    getdata()
    
   }
   useEffect(()=>{
     getdata()
   },[])
   const [flag2,upd3]=useState(0)
   function warn(){
    alert("please let the previous task completed")
   }
  return (
    <>
    {flag?
    <div>
     <table class="table">
  <thead>
    <tr >
     
      <th scope="col">name</th>
      <th scope="col">email</th>       
      <th scope="col">isactive</th>
      <th  scope="col">id</th>
      <th scope='col'>Delete</th>
      <th scope='col'>Update</th>
      
    </tr>
  </thead>
  <tbody>
    { data?.map((u)=>{
        return(
    <tr style={{width:'100%'}}>
   
      <td>{u.name}</td>
      <td>{u.email}</td>
      <td>{u.isActive?'True':'False'}</td>
      <td >{u._id}</td>
      <td>{!flag2? <button onClick={()=>{deletee(u._id)}}>Delete</button>:flag2===1 && id_id===u._id?
      
      <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button> :<button onClick={()=>warn()}>Delete</button>}</td>
<td><Link to = {`/Update/${u._id}`} className="btn btn-info">EDIT</Link></td>
    </tr>
    
        )
    })

}

  </tbody>
</table>
    </div> :  <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
}
    </>
  )
  
}

export default Component1
