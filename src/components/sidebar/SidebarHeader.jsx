import React, {useState} from 'react';
import { RandomReveal } from 'react-random-reveal';
import ThemeActionButton from '../ThemeActionButton';
import { Typography} from '@mui/material';
import avatar from '../../assets/Avatar.jpeg';
import { green } from '@mui/material/colors';
import {CustomAvatar} from '../common';
import SocialMediaIcons from '../SocialMediaIcons';

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
    return (
        <>
        <ThemeActionButton />
        <CustomAvatar 
        avatar={avatar}       
        size={180}
        fallback="SA"
        />
        <Typography variant='h6' sx={{ margin:"0 auto",}}
           color='secondary'>
            <Typography variant='caption' color={green[700]}>
            {"{{"}</Typography>
          <RandomReveal isPlaying
           duration={5} 
           characters="SOODEH ARVIN"
           onComplete={() => setStart(true)}
           />
           <Typography variant='caption' color={green[700]}>{"}}"}</Typography>
        </Typography>     
        {start && (
                  <Typography variant='caption' 
                  color="whitesmoke"
                >
                   <RandomReveal isPlaying
                   duration={3} 
                   characters="Frontend Developer"
                   />                                 
                </Typography>               
        )}  
        <SocialMediaIcons />
        </>

    );
}

export default SidebarHeader;