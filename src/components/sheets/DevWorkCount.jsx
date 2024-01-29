import {devInfo} from '../../constants/details';
import CountUp from 'react-countup';
import { Box, Chip, Typography, Tooltip } from '@mui/material';
const DevWorkCount = () => {
    return (
        <>
            {
                devInfo.map( (item, index) => (
                     <Box key={index} component='div' 
                         sx={{width: 1, mb: 1, marginLeft: 4}}
                                >
                         <Tooltip title={item.tooltipTitle} placement='right' arrow>
                            <Chip icon={item.icon} label={
                                <Typography variant='body1' color='text.primary'>
                                    <CountUp
                                     start={0}
                                     end={item.total}
                                     duration={2}
                                      />
                                </Typography>                                        
                                    }
                                    sx={{width: 1, backgroundColor: item.color, p:2}}
                                       />
                         </Tooltip>                                   
                     </Box>
                ))
            }
        </>
    )
};
export default DevWorkCount;