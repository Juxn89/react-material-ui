import React from 'react'
import { Stack, Typography } from '@mui/material';
import PaperInformation from '../../components/PaperInformation';
import LocationInformation from '../../components/LocationInformation';

const Description = ({userState}) => {
    const {
        bio
    } = userState;

    return (
        <>
            <Stack sx={{ justifyContent: 'center' }}>
                <Typography variant='body1'>
                    {
                        bio ||
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.`
                    }
                </Typography>
            </Stack>
            <PaperInformation userState={ userState } />
            <LocationInformation userState={ userState }/>
        </>
    )
}

export default Description;
