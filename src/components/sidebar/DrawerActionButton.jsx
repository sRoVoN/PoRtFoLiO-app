import React from 'react';
import { useContext } from 'react';
import MainContext from '../../context';
import { Box, Fab} from '@mui/material';
import { MenuRounded } from '@mui/icons-material';

const DrawerActionButton = () => {
    const{ setDrawerOpen} = useContext(MainContext);
    return (
        <Box sx={{
            
            display:{
              position: "absolute",
              xs:"block",
              sm:"block",
              md:"none", 
              lg:"none",
              xl:"none",
            }
          }}>
            <Fab sx={{backgroundColor: "primary.main", m: 2}}
               onClick={() => setDrawerOpen(true)}
               size='small'
                aria-label='sidebar'>
                   <MenuRounded />
            </Fab>
          </Box>   
    );
}

export default DrawerActionButton;