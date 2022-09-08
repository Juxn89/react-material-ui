import { Container } from '@mui/material';
import React from 'react'
import Searcher from './components/Searcher/Index';

const App = () => {
  return (
    <Container sx={ {
        alignItems: 'center',
        background: 'whitesmoke',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        marginTop: '40px',
        width: '80vw',
    } }>
        <Searcher />
    </Container>
  )
}

export default App;
