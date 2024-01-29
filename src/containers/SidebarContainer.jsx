import Grid from '@mui/material/Unstable_Grid2';
import { pink } from '@mui/material/colors';
import {useTheme} from '@mui/material/styles';
import React from 'react';

const SidebarContainer = ({children}) => {
    const theme = useTheme();
    return (
        <Grid xs={0} sm={0} md={3} lg={2} xl={2} 
         sx={{backgroundColor:theme.palette.mode === "dark" ? "#feb999" : pink[50],
         height: "auto",
         overflowY: "auto",
         overflowX: "hidden",         
         }}>
            {children}
        </Grid>
      
    );
}

export default SidebarContainer;