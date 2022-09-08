import React, { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import Searcher from './components/Searcher/Index';

import { getGitHubUser } from './services';

const App = () => {
  const [ inputUser, setInputUser ] = useState('octocat');
  const [ userState, setUserState ] = useState(inputUser);
  const [ notFound, setNotFound ] = useState(false);

  const getUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if(userState === 'octocat') {
      localStorage.setItem('octocat', JSON.stringify(userResponse));
    }

    if(userResponse?.message === 'Not Found') {
      const octocat = localStorage.getItem('octocat');
      setUserState(JSON.parse(octocat));
      setNotFound(true);
    }
    else {
      setUserState(userResponse);
      setNotFound(false);
    }

  }
  
  useEffect(() => {
    getUser(inputUser);
  }, [inputUser])
  

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
      }}
    >
    <Searcher setInputUser={ setInputUser }/>
    </Container>
  )
}

export default App;
