import { cloneElement } from "react";
import { AppBar, Toolbar, useScrollTrigger, Button, Typography, Hidden } from "@mui/material";
import logo from '../../assets/uniregistry.svg'

const Header = () => {
    
function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,

    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

    return (
        <>
        <ElevationScroll>
          <AppBar sx={{backgroundColor:'white'}}>
            <Toolbar style={{ justifyContent:"space-between"}}>
                <img src={logo} alt="logo" style={{width:"3rem", marginRight:"8px"}}/>
                <Hidden mdDown>
                <Typography variant="h5" sx={{marginRight: 5, verticalAlign: "center", color:"#cedd81"}}>
                Personal Website: Soode Arvin
                </Typography>
                </Hidden>
                <Button variant="outlined" color="secondary">Click</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>        
        </>
    )
}
export default Header;