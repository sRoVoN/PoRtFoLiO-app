import React, {useEffect, useRef, useCallback, useState} from 'react';
import {Box, Divider, Typography} from '@mui/material';
import Typed from 'typed.js';
import TextTransition, {presets} from 'react-text-transition';
import { blueGrey, green, pink, red } from '@mui/material/colors';



const HomePage = ()=> {
    const [index, setIndex] = useState(0);
    const strings = [
        "I am a Frontend Developer",
        "I am a Freelanser",
        "I am  ...",
        "I am a programmer"
    ];
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const secondString = [
        " a Frontend Developer",
        "a Freelanser",
        "a web desighner",
        "a programmer"
    ];
    const secondEl = useRef(null);


    useEffect( () => {
        const typedName = new Typed(nameEl.current, {
            strings: [
                "{{SOODEH ARVIN}}"
            ],
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 10,
            showCursor: false,
        });
        const typedInfo = new Typed(infoEl.current, {
            strings ,
            startDelay: 3000,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 50,
            loop: true,
            showCursor: false,
    
        });


        
        return () => {
            typedName.destroy();
            typedInfo.destroy();
      };

    }, []);
    
    useEffect( () => {
        const secondName = new Typed(secondEl.current, {
            strings: [
                "SOODEH ARVIN"
            ],
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 10,
            showCursor: false,
        });

        const stringTransition = setInterval(() => {
            setIndex(index => index + 1);
        }, 3000);
        
        return () => {

            secondName.destroy();
            clearInterval(stringTransition);
        }
    }, []);

    
    
        // const particlesInit = useCallback(async (engine) => {
    //     await loadFull(engine);
    // }, []);
    // const particlesLoaded = useCallback( async (container) => {
    //     await 
    //     console.log(container);



    return (
        <Box sx={{
            height:"100vh",             
            backgroundColor: 'pink',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow:"hidden"
          }}          
          >  
            <Box sx={{display:'flex'}}>
                <Typography variant='h3' color={green[400]}>
                    {"{{"}
                </Typography>
            <Typography ref={secondEl} variant='h3' color={red['A400']} />
            <Typography variant='h3' color={green[400]}>
                    {"}}"}
                </Typography>
            </Box>             
             <Box component="div" sx={{display:'flex'}}>
                <Typography variant='h4' color={pink[500]} sx={{mr:2}}>
                    I am
                </Typography>
             <TextTransition springConfig={presets.wobbly}>
             <Typography  variant='h4'  color={blueGrey[800]}>
                {secondString[index % secondString.length]}
             </Typography>
             </TextTransition>
             </Box>
             <Divider  sx={{color: 'primary', mt: 5}}/>
             <Typography ref={nameEl} variant='h3' color={red['A400']} />
             <Typography ref={infoEl} variant='h4'  color={blueGrey[800]} />
          </Box> 
    );
}

export default HomePage;