import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
  
    <Stack direction={{xs:'column',md:"row"}} justifyContent={'space-around'}  sx={{alignItems:{xs:"center", md:"start"},gap:{xs:4,md:0}}} >
        <Stack justifyContent={'center'}>
            <img srcSet='https://jawanpakistan12.web.app/images/j3.png' width={"100%"} style={{maxWidth:"200px"}} />
        </Stack>
     
        <Stack direction={'column'} alignItems={'center'}>
            <Typography mb={1}  fontWeight={600} letterSpacing={1}>COMPANY</Typography>
            <Button variant='text' sx={{color:"green",fontWeight:"normal",width:"auto",textTransform:"capitalize", p:0,"&:hover":{color:"black",background:"none",width:"auto",p:0}}}>Home</Button>
            <Button variant='text' sx={{color:"green",fontWeight:"normal",width:"auto",textTransform:"capitalize", p:0,"&:hover":{color:"black",background:"none",width:"auto",}}}>About us</Button>
            <Button variant='text' sx={{color:"green",fontWeight:"normal",width:"auto",textTransform:"capitalize", p:0,"&:hover":{color:"black",background:"none",width:"auto",}}}>Trainings</Button>
            <Button variant='text' sx={{color:"green",fontWeight:"normal",width:"auto",textTransform:"capitalize", p:0,"&:hover":{color:"black",background:"none",width:"auto",}}}>Contact us</Button>
        </Stack>
        <Stack direction={'column'} alignItems={'center'}>
            <Typography mb={1} fontWeight={600} letterSpacing={1}>CONTACT DETAILS</Typography>
            <Button variant='text' sx={{color:"green",fontWeight:"normal",width:"auto",textTransform:"capitalize", p:0,"&:hover":{color:"black",background:"none",width:"auto",p:0}}}>Muhammad Ali Mughal</Button>
            <Button variant='text' sx={{color:"green",fontWeight:"normal",width:"auto",textTransform:"capitalize", p:0,"&:hover":{color:"black",background:"none",width:"auto",p:0}}}>+923005292675</Button>
            <Button variant='text' sx={{color:"green",fontWeight:"normal",width:"auto",textTransform:"capitalize", p:0,"&:hover":{color:"black",background:"none",width:"auto",p:0}}}>jawantechpk@gmail.com</Button>
            
        
        </Stack>
    </Stack>
  )
}

export default Footer