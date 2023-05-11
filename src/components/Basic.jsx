import { Button, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const Basic = () => {
  return (
    <div><br/><h1>Basic</h1>
    <input type='text' placeholder='name'></input>
     <Typography variant='h1'color="red">Mohammad Siddique P S</Typography><br></br>
     <TextField label='name' size="large"variant='standard'/>
     <br></br><br/>
<Button variant='outlined'>click me</Button>
<br></br><br/>
<Button variant='text'>submit</Button>
<br></br><br/>
<Button variant='contained'  color="secondary" size="small">tyfoyug</Button>


     </div>

  
  )
}

export default Basic


