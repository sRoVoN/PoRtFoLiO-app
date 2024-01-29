import { CardContent, Card } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import avatar from '../../assets/AVATAR.JPG';
import { CodeRounded, SelfImprovementRounded } from '@mui/icons-material';
import {Devinfo} from '../sheets';
import { CustomAvatar, CustomDivider } from '../common/index';
import AllSkills from '../sheets/AllSkills';
import DevWorkCount from '../sheets/DevWorkCount';



const About = () => {

    return (
    <Card sx={{height: '100vh', backgroundColor: '#fbc7af', overflowY: 'scroll'}}>
        <CardContent sx={{height: '100vh'}}>
            <Grid2 container  sx={{mx: 2}}>
                <Grid2 xs={12} sm={12} md={8} lg={8} xl={8}>
                    <CustomDivider
                    bColor="primary.main"
                    cColor="primary"
                    icon={<CodeRounded />}
                    align="right"
                    text="Frontend Developer"
                     />
                <Grid2 container >
                    <Grid2 xs={12} sm={8} md={9} lg={9} >
                        <Devinfo />
                    </Grid2>
                    <Grid2 xs={4} sm={4} md={3} lg={3}
                    sx={{ mt:1,
                         display: {
                        'xs': 'none',
                        'sm': 'block',
                        'md': 'block'
                    }}}
                     >
                        <DevWorkCount />
                    </Grid2>
                </Grid2>
                </Grid2>
                <Grid2  xs={0} sm={0} md={4} lg={4} xl={4}>
                    <CustomAvatar 
                    avatar={avatar}
                    size={180}
                    fallback= "SA"
                    />                    
                </Grid2>
            </Grid2>
            <Grid2 container>
                <Grid2 sx={{width: 1}}>
                   <CustomDivider
                    bColor="secondary.main"
                    cColor="secondary"
                    icon={<SelfImprovementRounded  />}
                    align="center"
                    text="My Skills"
                     />
                    <AllSkills />
                </Grid2>                
            </Grid2>

        </CardContent>
    </Card>
    );
};

export default About;