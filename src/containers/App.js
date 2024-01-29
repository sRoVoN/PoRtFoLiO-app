import MainLayout from '../layouts/MainLayouy';
import { Sidebar} from '../components/sidebar';
import { useState, useEffect } from 'react';
import SidebarContainer from './SidebarContainer';
import {Page} from '../components/sheets';
import MainContext from '../context';
import PagesContainer from './PagesContainer';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import DrawerActionButton from '../components/sidebar/DrawerActionButton';
import {HomePage, About, Resume, Samples, Comments, Contact} from '.././components/pages/index';




function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [mode, setMode] = useState();  
  const predersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


  useEffect(() => {
    setMode(predersDarkMode ? "dark" : "light");
    console.log("isDark", predersDarkMode);
  }, []); 

  useEffect( () => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);


  const handleThemeChange = () => {
    setMode(prevMode => prevMode  === "light" ? "dark" : "light")
   }; 


  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };
  
  return (
    <MainContext.Provider value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen, handleThemeChange}}>
       <MainLayout mode={mode}>
          <SidebarContainer>
          <Sidebar />
          </SidebarContainer> 
          <DrawerActionButton /> 
          <PagesContainer>
          <Page value={pageNumber} index={0}>
               <HomePage />
          </ Page>
          <Page value={pageNumber} index={1}>
                <About/>              
          </ Page>   
         <Page value={pageNumber} index={2}>
          <Resume />               
        </ Page> 
        <Page value={pageNumber} index={3}>
          <Samples />             
        </ Page> 
        <Page value={pageNumber} index={4}>
          <Comments />              
        </ Page>
        <Page value={pageNumber} index={5}>
          <Contact />              
        </ Page>
          </PagesContainer>
    </MainLayout>
    </MainContext.Provider>

  );
}

export default App;
