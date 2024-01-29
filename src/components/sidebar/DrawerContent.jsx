import React from 'react';
import { Box, Divider } from '@mui/material';
import {SidebarHeader, SidebarBody, SidebarFooter }from '.';
import { useContext } from 'react';
import MainContext from '../../context';


const DrawerContent = () => {
  const{ setDrawerOpen} = useContext(MainContext);
    return (
        <Box sx={{ textAlign: "center", justifyContent: "center", mt: 2, }}>
          <SidebarHeader />
            <Divider sx={{color: "Background.main", mt:2}}
             variant='middle'
            />
            <SidebarBody 
             setDrawerOpen={setDrawerOpen} />
            <SidebarFooter />
      </Box> 
    );
}

export default DrawerContent;