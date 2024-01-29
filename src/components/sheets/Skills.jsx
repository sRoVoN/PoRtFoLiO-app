import { Badge, Box, Chip, Divider, LinearProgress, Typography } from '@mui/material';
import React from 'react';

const Skills = ({icon, color, name, value}) => {
    return (
        <>
        <Divider textAlign='left' 
        sx={{"&::before,&::after": {
            borderColor:`${color}.main`
        }}}>
            <Chip 
            icon={<Box component="img" src={icon}
            sx={{height:30}}
            />}
            color={color}
            label={name}
            sx={{color: '#000', p: 3}}            
            />
        </Divider>      
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Box sx={{minWidth: 35}}>
                <Typography variant='body2' color='black'>
                    <Badge 
                    variant="standard"
                    badgeContent={`${Math.round(value)}%`}
                    color={color}
                    />
                </Typography>
            </Box>
            <Box sx={{width:1, mr: 1, mb: 1}}>
                <LinearProgress variant='determinate'
                 value={value} color={color}
                 sx={{height: 10, borderRadius: 2}}
                  />
            </Box>
        </Box>    
        </>
    );
};

export default Skills;