import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container } from '@mui/system';
import { Box, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const inter = Inter({ subsets: ['latin'] })

const useStyles = makeStyles({
  container: {
    
  }
})

const Home = () => {
  return (
    <Container>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        marginTop: '5vw' }}>
          <h2>Enter Your Email</h2>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
      </Box>
    </Container>
  )
}


export default Home