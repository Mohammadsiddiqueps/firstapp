import { TextField } from '@mui/material';
import React, { useState } from 'react'

const Ex2 = () => {
var[val,setVal]= useState({names:'',age:'',place:''});
    const scanner=(e)=>{
     const{name,value}=e.target   
    setVal((val)=>({...val,[name]:value}))
    }
  return (
    <div>
      <br/><br/><br/><br/>Ex2<br/><br/>

     <TextField variant='outlined' name="names" value={val.names} placeholder='name' label="Name" onChange={scanner}/><br/><br/>
    <TextField variant='outlined' name="age" value={val.age} placeholder='Age' label='age' onChange={scanner}/><br/><br/>
    <TextField variant='outlined' name="place" value={val.place} placeholder='place' label="place" onChange={scanner}/><br/><br/>

    name:{val.names}<br/><br/>
    age:{val.age}<br/><br/>
    Place:{val.place}
    </div>

  )
}

export default Ex2