import {  SchoolRounded, SettingsEthernetRounded, WorkHistoryRounded } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CustomDivider } from "../common";
import {useState, useEffect} from 'react';
import { DevEduTimeline, DevCarTimeline } from "../sheets";




const Resume = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return() => {
            setLoading(false);
        }

    }, [])
    

    return(
        <Card 
        sx={{height:'100vh', backgroundColor:'#fbc7af', overflow:'scroll'}}
        >
            <CardContent>
                <CustomDivider 
                    bColor="primary.main"
                    cColor="primary"
                    icon={<SettingsEthernetRounded/>}
                    align="center"
                    text="My Resume"
                    />              
               <Grid2 container sx={{mt:4}}>
                    <Grid2 xs={6}>
                       <CustomDivider 
                          bColor="info.main"
                          cColor="info"
                          icon={<SchoolRounded/>}
                          align="center"
                          text="My Education"
                         /> 
                         <DevEduTimeline loading={loading} />
                    </Grid2>
                    <Grid2 xs={6}>
                        <CustomDivider 
                        bColor="warning.main"
                        cColor="warning"
                        icon={<WorkHistoryRounded />}
                        align="center"
                        text="My Career"

                        />
                        <DevCarTimeline loading={loading} />
                    </Grid2>
               </Grid2>              
            </CardContent>
        </Card>

    )

};
export default Resume;