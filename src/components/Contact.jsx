
import { Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function Contacts() {
  return (
    <Stack pt={6} px={2} gap={2}>
        <Stack width={"100%"}  maxWidth={600} m={"0 auto"} spacing={2} p={2} boxShadow={"2px 4px 2px #8080806f"}>
            <Typography variant='h6' fontWeight={800}>Contact</Typography>
            <Stack width={"100%"} p={0}>
                <label style={{color:"#718096"}}>Name*</label>
                <TextField  sx={{mb:2,}}  type='text' variant='outlined'></TextField>
                <label style={{color:"#718096"}}>Email*</label>
                <TextField  sx={{mb:2}} type='emai' variant='outlined'></TextField>
                <label style={{color:"#718096"}}>Password*</label>
                <TextField  sx={{mb:2}} type='password' variant='outlined'></TextField>
                <label style={{color:"#718096"}}>Mesaage*</label>
                <TextField  sx={{mb:2}} multiline rows={4}  variant='outlined'></TextField>
            </Stack>
            <Button variant='contained' sx={{bgcolor:"#006838","&:hover":{bgcolor:'#006838',},py:"10px"}}>Sumbit</Button>
        </Stack>
        <hr />
    </Stack>
  )
}

export default Contacts
