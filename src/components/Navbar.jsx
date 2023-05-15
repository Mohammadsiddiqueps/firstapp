import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>Navbar
<AppBar>
    <Toolbar>
        <Typography sx={{flexGrow:1}} align='center'>TrialApp</Typography>
        <Typography>Change</Typography>
         <Button ><Link to={'/Ex2'} style={{color:'white'}}>Ex2</Link></Button>
         <Button><Link to={'/table'} style={{color:'white'}}>Table</Link></Button>
         <Button><Link to={'/view'} style={{color:'white'}}>ViewData</Link></Button>
    </Toolbar>
</AppBar>

    </div>
  )
}

export default Navbar