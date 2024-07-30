import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function  Info() {
  return (
    <Stack alignItems={"center"} mt={6} pb={10} spacing={2} px={2} height={{md:"100vh",sm:"auto"}} pt={8}>
        <Stack alignItems={'center'} spacing={2}>
            <img srcSet='https://jawanpakistan12.web.app/images/image.jpg' width={200} height={200} style={{borderRadius:"50%"}}/>
        <Typography width={"60px"} height={5} bgcolor={"pink"} borderRadius={2}></Typography>
        </Stack>
        <Stack display={'flex'} direction={'column'} alignItems={'center'} spacing={2}>
         <Typography variant="h4" textAlign={'center'} fontWeight={500} color={"#006838"}>MUHAMMAD ALI MUHGAL</Typography>
         <Typography  color={"#718096"} textAlign={'center'}>Founder of Jawan Pakistan</Typography>
         <Typography width={30} >
         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 975.036 975.036" style={{color:"#718096"}}>
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
         </svg>
         </Typography>
         <Typography color={"#718096"}  sx={{width:{xs:"100%", sm:"45%"}}}  textAlign={'center'}>
          We aim to be most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.
         </Typography>

        </Stack>
    </Stack>
  )
}

export default Info