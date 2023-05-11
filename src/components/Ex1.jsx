import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Ex1 = () => {
var[val1,setVal1] = useState();
var[val2,setVal2] = useState();

const readName=(e)=>{
   setVal1(e.target.value)
}

const readAge=(e)=>{
   setVal2(e.target.value)
}
  return (
    <div>
      <Typography variant='h1'>Experiment 2</Typography>
    <TextField variant='outlined' placeholder='name'onChange={readName}/><br/><br/>
    <TextField variant='outlined' label='age' onChange={readAge}/><br/><br/>
    Name: {val1}<br/>
    <br/>
    Age: {val2}
    </div>
  )
}

export default Ex1