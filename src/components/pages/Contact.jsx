import {useState, useEffect} from 'react';
import { Typography, Card, CardContent, Slide} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import worldMap from '../../assets/map.svg';
import { CustomDivider } from '../common';
import {ContactForm} from '../sheets';




const Contact = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return() => {
            setLoading(false);
        }

    }, []);


    return(
        <Card sx={{
            height: "100vh",
            backgroundColor:'pink',
            overflow: 'scroll',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CardContent>
                <CustomDivider 
                bColor="secondary.main"
                cColor="secondary"
                icon={<AccountCircle />}
                align="center"
                text="Contact Me"
                />
                <Grid2 container sx={{mt:5}}>
                <Slide 
                   direction="up"
                   in={loading} 
                   style={{
                   transitionDelay: loading ? '200ms': '0ms'
                }}
                >
                    <Grid2 xs={12} sm={12} md={8}>
                        <Card sx={{justifyContent: 'center', alignItems: 'center'}}>
                            <ContactForm />
                        </Card>
                    </Grid2>
                    </Slide>
                    <Slide 
                    direction='up'
                    in={loading}
                    style={{
                        transitionDelay: loading ? '200ms': '0ms'                        
                    }}
                    >
                        <Grid2 xs={0} sm={0} md={4} 
                        sx={{ 
                        textAlign: "center",
                        backgroundImage:`url(${worldMap})`,
                        backgroundRepeat:" no-repeat" ,
                        backgroundPosition: "center",
                    }}
                        >
                            <Typography variant='h6' 
                            color='black'
                            sx={{
                                fontFamily: "Dosis",
                                mt: 4,
                                display: {
                                    sm: 'none',
                                    md: 'block'
                                }                              
                            }}
                            >
                                Let's Dive in Conversation
                            </Typography>
                            <Typography variant='h6' 
                            color='black'
                            sx={{
                                fontFamily: "Dosis",
                                mt: 4,
                                display: {
                                    sm: 'none',
                                    md: 'block'
                                }                              
                            }}
                            >
                                {" "}
                            
                            <a
                             alt='Email'
                            href='mailto:soodeh.arvin@gmail.com'
                            sx={{ color:'black'}}
                            >
                                Email
                            </a>{" "}
                            Ma !
                            </Typography>
                        </Grid2>
                    </Slide>
                </Grid2>
            </CardContent>
        </Card>

    );
};
export default Contact;