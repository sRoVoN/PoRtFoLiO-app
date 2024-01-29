import React from 'react';
import { Box, Typography } from '@mui/material';
import { CopyrightRounded } from '@mui/icons-material';

const SidebarFooter = () => {
    return (
        <>
       <Box 
       sx={{
        flexGrow: 1,
        display:"flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        height: 100
       }}
       >
        <Typography variant='subtitle2' color="text.primary">
          Designed by : Soodeh Arvin 
        </Typography>
        <Typography variant='caption' color="text.primary"> 
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 20 }}/>
        </Typography>
       </Box>
            
        </>
    );
}

export default SidebarFooter;