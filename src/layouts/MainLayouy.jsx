import { ThemeProvider} from '@mui/material/styles';
import {lightTheme, darkTheme} from '../components/UI/theme';
import Grid from '@mui/material/Unstable_Grid2';



const MainLayout = ({children, mode}) => {
    const theme = mode === "dark" ? darkTheme : lightTheme;
     
    return (
        <ThemeProvider theme={theme}>  
                 <Grid container sx={{height: "100vh"}} >
                  {children}
                 </Grid>       
        </ThemeProvider>   
    )
}

export default MainLayout;