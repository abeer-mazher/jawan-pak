import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function Main() {
  return (
    <Grid container sx={{p:{xs:"10px 10px",lg:"10px 40px"} ,mt:10}}>
        <Grid item lg={6} xs={12}>
          <Stack>
            <Typography fontWeight={600} width={{md:"100%",sm:"100%" ,lg:"40%"}} variant='h4' color={'#006838'}>Introduction To Jawan Pakistan</Typography>
            <Typography color={'#718096'} >The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.</Typography>
          </Stack>
        </Grid>
        <Grid item lg={6} xs={12} display={'flex'} justifyContent={'center'}>
            <img src="https://jawanpakistan12.web.app/images/1.png" width={'100%'} style={{maxWidth:"340px"}} />
        </Grid>
    </Grid>
    )
}

export default Main