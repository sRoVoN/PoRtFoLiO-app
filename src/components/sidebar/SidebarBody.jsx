import React from 'react';
import MainContext from '../../context';
import { useContext } from 'react';
import { Tab, Tabs, Divider } from '@mui/material';
import { TabsData } from '../../constants/tabsData';
import { useTheme } from '@mui/material/styles';


const SidebarBody = () => {
  const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext);
  const data = TabsData();
  const theme = useTheme();

    return (
        <>
       <Tabs 
       orientation="vertical"
       value={pageNumber}
       onChange={handlePageNumber}
       variant="scrollable"
       scrollButtons="auto"
       allowScrollButtonsMobile
       >
        {
          data.map((tab, index) =>  (
            <Tab label="home"
            key={index} 
            icon={tab.icon}
            iconPosition="start"
            sx={{
              "&.MuiTab-root": {
                minHeight: 40,
                my:0.5,
                mx:0.8,
                backgroundColor: theme.palette.mode === "dark" ? "#7a4d40" : "#95675a" ,
                borderRadius: 2,
                color: "text.primary"
              }
            }}
            onClick={() => setDrawerOpen(false)}
            {...tab}
            >
            </Tab>
          ))
        }

       </Tabs>
       <Divider sx={{ mt:2}}
      variant='middle'
       />
        </>
    );
}

export default SidebarBody;