import { Assignment} from "@mui/icons-material";
import { CardContent} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState, useEffect} from 'react';
import { MyProjects } from "../sheets";
import { CustomDivider } from "../common";


const Samples = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        

        return() => {
            setLoading(false);
        }

    }, []);
    
    
    return(
        <CardContent> 
            <CustomDivider 
            bColor="secondary.main"
            cColor="secondary"
            icon={<Assignment />}
            align="center"
            text="My Projects"
            />
            <Grid2 container sx={{mx:3, mt: 2}}>
                <MyProjects loading={loading} />
            </Grid2>
        </CardContent>
    )

};

export default Samples;