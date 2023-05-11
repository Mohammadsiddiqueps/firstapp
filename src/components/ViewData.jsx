import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData = () => {
    var[user,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        }
        )
        .catch((err)=>console.log(err))
    },[])
   
  return (
    <div style={{padding:'100px'}}>
     <Typography variant='h3'>   ViewData</Typography>
<br/><br/>
<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell style={{color:'red',fontSize:'45px'}}>Name</TableCell>
                <TableCell style={{color:'red',fontSize:'45px'}}>Email</TableCell>
                <TableCell style={{color:'red',fontSize:'45px'}}>Street</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {user.map((value,index)=>{
                return(
           <TableRow key={index}>
                <TableCell>{value.name}</TableCell>
            <TableCell>{value.email}</TableCell>
            <TableCell>{value.address.street}</TableCell>
            </TableRow>
                )
            })
            }
            
        </TableBody>
    </Table>
</TableContainer>
    </div>
  )
}

export default ViewData
