import { Box, capitalize, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Grid container sx={{p:{xs:"10px 10px",lg:"10px 40px"} ,mt:10}}>
        <Grid item lg={6} xs={12} display={'flex'} justifyContent={'center'}>
            <img src="https://jawanpakistan12.web.app/images/2.png" width={'100%'} style={{maxWidth:"500px"}} />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Stack gap={2}>
            <Typography fontWeight={600} width={{md:"100%",sm:"100%" ,lg:"45%"}} variant='h4' color={'#006838'} textTransform={capitalize}>Mission And vision behind Jawan Pakistan</Typography>
            <Typography color={'#718096'}>Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.</Typography>
            <Typography color={'#718096'}>Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.</Typography>
          </Stack>
        </Grid>
    </Grid>
    )
}

export default About