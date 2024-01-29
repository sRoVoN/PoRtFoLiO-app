import React from 'react';
import { CardContent } from '@mui/material';
import {  ForumRounded} from '@mui/icons-material';
import { CustomDivider } from '../common';
import CommentsSlider from '../sheets/CommentsSlider';

const Comments = () => {

    return (
        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
            <CustomDivider
            bColor="secondary.main"
            cColor="secondary"
            align="center"
            icon={<ForumRounded />}
            text=" Students's Comments"
             />
             <CommentsSlider />

        </CardContent>
   
    );
};

export default Comments;