import { GitHub, Instagram, Telegram, Twitter } from '@mui/icons-material';
import {IconButton, Box } from '@mui/material';


const SocialMediaIcons = () => {
    return(
        <Box component='div' sx={{m:'0 auto', textAlign:'center'}} >
        <IconButton aria-label='Github'>
           <a href='http://github.com/sRoVoN' 
           target='_blank'
           />
           <GitHub  />
        </IconButton>
        <IconButton aria-label='Twitter'>
           <a href='http://twitter.com/soodeh.arvin' 
           target='_blank'
           />
           <Twitter  />
        </IconButton>
        <IconButton aria-label='Instagram'>
           <a href='http://instagram.com/soodeh.arvin' 
           target='_blank'
           />
           <Instagram  />
        </IconButton>
        <IconButton aria-label='Telegram'>
           <a href='http://telegram.com/soodeh.arvin' 
           target='_blank'
           />
           <Telegram  />
        </IconButton>
       </Box>
    )
};
export default SocialMediaIcons;