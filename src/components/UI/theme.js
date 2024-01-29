import { createTheme } from "@mui/material";



export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main:"#fe223e"
        },
        secondary: {
            main: "#fe6181"
        }, 
        success: {
            main: "#cedd81"
        },
        error: { 
            main: "#950519"
        },
        warning: {
            main: "#ff7800"
        },
        background: {
            main: "#c48170"
        }, 
        info: {
            main: "#ffc107"
        }

    },
    typography: {
        fontFamily: 'Bitter , Dosis',
        button : {
            fontFamily: "Dosis"
        }
       },
       
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main:"#fe223e"
        },
        secondary: {
            main: "#fe6181"
        }, 
        success: {
            main: "#cedd81"
        },
        error: { 
            main: "#950519"
        },
        warning: {
            main: "#ff7800"
        },
        background: {
            main: "#c48170"
        }, 
        info: {
            main: "#ffc107"
        }

    },
    typography: {
        fontFamily: 'Bitter , Dosis',
        button : {
            fontFamily: "Dosis"
        }
       },
       
});