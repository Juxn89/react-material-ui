import React from 'react'
import { Grid, Stack, Typography } from '@mui/material';
import { LocationOn, Twitter, Language, Business } from '@mui/icons-material';

const LocationInformation = ({userState}) => {
    const { 
        location,
        twitter_username,
        blog,
        company
     } = userState;
    return (
        <Grid container spacing={2} sx={{ marginTop: '15px' }}>
            <Grid item xs={ 6 } direction='row' spacing={2}>
                <Stack>
                    <LocationOn />
                    <Typography>{ location }</Typography>
                </Stack>
            </Grid>
            <Grid item xs={ 6 } direction='row' spacing={2}>
                <Stack>
                    <Twitter />
                    <Typography>{ `@${twitter_username || 'No available'}` }</Typography>
                </Stack>
            </Grid>            
            <Grid item xs={ 6 } direction='row' spacing={2}>
                <Stack>
                    <Language />
                    <Typography>{ blog || 'No available' }</Typography>
                </Stack>
            </Grid>
            <Grid item xs={ 6 } direction='row' spacing={2}>
                <Stack>
                    <Business />
                    <Typography>{ company || 'No available' }</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LocationInformation;
