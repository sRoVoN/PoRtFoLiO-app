import { useEffect, useRef, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import Typed from 'typed.js';
import TextTransition, { presets } from 'react-text-transition';
import { blueGrey, green, pink, red } from '@mui/material/colors';

const strings = [
  "I am a Frontend Developer",
  "I am a Freelanser",
  "I am  ...",
  "I am a programmer"
];

const secondString = [
  " a Frontend Developer",
  "a Freelanser",
  "a web desighner",
  "a programmer"
];

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const secondEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["{{SOODEH ARVIN}}"],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 10,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings,
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

  useEffect(() => {
    const secondName = new Typed(secondEl.current, {
      strings: ["SOODEH ARVIN"],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 10,
      showCursor: false,
    });

    const stringTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      secondName.destroy();
      clearInterval(stringTransition);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "pink",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography variant="h3" color={green[400]}>
          {"{{"}
        </Typography>
        <Typography variant="h3" color={red["A400"]}>
          <span ref={secondEl}></span>
        </Typography>
        <Typography variant="h3" color={green[400]}>
          {"}}"}
        </Typography>
      </Box>
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h4" color={pink[500]} sx={{ mr: 2 }}>
          I am
        </Typography>
        <TextTransition springConfig={presets.wobbly}>
          <Typography variant="h4" color={blueGrey[800]}>
            {secondString[index % secondString.length]}
          </Typography>
        </TextTransition>
      </Box>
      <Divider sx={{ color: "primary", mt: 5 }} />
      <Typography variant="h3" color={red["A400"]}>
        <span ref={nameEl}></span>
      </Typography>
      <Typography variant="h4" color={blueGrey[800]}>
        <span ref={infoEl}></span>
      </Typography>
    </Box>
  );
};

export default HomePage;
