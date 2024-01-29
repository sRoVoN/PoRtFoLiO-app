import { useTheme } from "@mui/material/styles";
import { useContext} from 'react';
import { Box, Fab } from "@mui/material";
import { NightlightRounded, WbSunnyOutlined } from "@mui/icons-material";
import mainContext from '../context';

const ThemeActionButton = () => {
    const theme = useTheme();
    const {handleThemeChange} = useContext(mainContext);

    return(
        <Box sx={{ position: "absolute",  display:{
            sm: "none",
            md: "block"
        }}}
        >
            <Fab 
            variant="extended" 
            area-aria-label="ThemeChanger" 
            size="small" 
            color="info"
            onClick={handleThemeChange}
            sx={{ color:"yellow" }}
            >
                {theme.palette.mode === "dark" ? (<WbSunnyOutlined sx={{ml: 1}} />)
                 :( <NightlightRounded  sx={{ml: 1}}/>) }
                {theme.palette.mode === "dark" ? "Light" : "Dark" }

            </Fab>
        </Box>
    )
}

export default ThemeActionButton;