import { Box} from '@mui/material';
import React from 'react';

const Page = (props) => {
    const {children, value, index, ...others} = props;

    return (
        <div
        role='tabpanel'
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`sidebar-tab-${index}`}
        {...others}
        >
            {value === index && (
                <Box sx={{height: 1, overflow:"scroll" }} >
                       {children}
                </Box>
            )}
        </div>
    );
}

export default Page;