import { KeyboardArrowRightRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';

const Info = ({children}) => {
    return (
        <Typography variant='body1' color='black' 
        sx={{textAlign:'left'}}>
            <KeyboardArrowRightRounded 
            sx={{verticalAlign:'bottom', color:'primary.main'}}/>
        {children}       
        </Typography>        
    );
};

const Devinfo = () => {
    return(
        <>
           <Info>Firstname and Lastname: Soodeh Arvin</Info>
           <Info>Age: 38</Info>
           <Info>City: Tehran</Info>
           <Info>Email address: Soodeh.Arvin@jmail.com</Info>
           <Info>Number: 333 222 000</Info>
        </>
    )
};

export default Devinfo;