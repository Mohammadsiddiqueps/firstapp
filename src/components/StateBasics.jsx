import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function StateBasics() {
    var [ pname,setpname ] = useState("Class");
    var[data,setData] = useState()
    const changename =()=>{
        console.log("clicked");
        setpname(data);
    }
    const readValue = (e)=>{
          setData(e.target.value);
          console.log(data);
    }
  return (
    <div>StateBasics
        
<Typography variant='h3' color="red">Welcome {pname}</Typography>

<TextField variant='outlined' onChange={readValue}></TextField>
<Button variant='text' size='large' onClick={changename}>Change</Button>
<Button variant='text' size='large' onClick={changename}>reset</Button>

    </div>
  )
}

export default StateBasics