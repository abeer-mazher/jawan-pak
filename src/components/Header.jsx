import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <>
     <Stack direction={{xs:"column", sm:"row"}} gap={2} sx={{p:{xs:"10px 10px",md:"10px 40px"}}}>
        <Stack>
            <img srcSet='https://jawanpakistan12.web.app/images/j3.png' width={'100%'} style={{maxWidth:200}}  />
        </Stack>
        <Stack direction={"row"} flexWrap={'wrap'} gap={1}>
            <Button sx={{color:"black", "&:hover":{color:"green",bgcolor:"transparent"}}}>Home</Button>
            <Button sx={{color:"black", "&:hover":{color:"green",bgcolor:"transparent"}}}>About us </Button>
            <Stack sx={{position:"relative",}} className={styles.menu}  >
                <Button sx={{color:"black", "&:hover":{color:"green"},display:{xs:"none" , sm:"flex"},alignItems:"center"}}>Training</Button>
                <Box sx={{position:"absolute" ,display:"none",width:"300px" }} className={styles.menuItems}>
                    <Box sx={{marginTop:"30px",bgcolor:"#F1F1F1",} }>
                    <p>Web and Mobile Application Development</p>
                    <p>Fluuter Application develoment</p>
                    <p>Digital Marketing</p>
                    <p>Blockchain develoment</p>
                    </Box>
                </Box>
              </Stack>
            <Button sx={{color:"black", "&:hover":{color:"green",bgcolor:"transparent"}}}>Contact</Button>
        </Stack>
     </Stack>
    </>
  )
}

export default Header