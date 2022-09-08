import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ setInputUser }) => {

  const [ valueInput, setValueInput ] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  }

  const handleSubmit = () => {
    setInputUser(valueInput);
  }

  return (
    <Stack
      direction= 'row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}
    >
      <TextField
        id=''
        label='Github user'
        placeholder='Octocat'
        variant='outlined'
        size='small'
        sx={{
          width: '90%'
        }}
        value={ valueInput }
        onChange={ (event) => onSearchValueChange(event) }
      >
      </TextField>      
      <IconButton
        size='small'
        sx={{
          left: '-45px'
        }}
        onClick={ handleSubmit }
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher;