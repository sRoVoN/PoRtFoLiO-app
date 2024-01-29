import {DrawerContent} from './';
import { Drawer} from '@mui/material';
import { useContext } from 'react';
import MainContext from '../../context';
import DrawerActionButton from './DrawerActionButton';



const Sidebar = ()=> {

  const{ drawerOpen, setDrawerOpen} = useContext(MainContext);

    return (
       <>
            <DrawerActionButton />
            <DrawerContent  />
            <Drawer open={drawerOpen} variant='temporary' 
            sx={{
              "& .MuiDrawer-paper": {
                width: 300,
                backgroundColor: "#fbc7af",
              },
            }}
             onClose={() => setDrawerOpen(false)}>
               <DrawerContent  />
            </Drawer >
       </>     
    );
}

export default Sidebar;