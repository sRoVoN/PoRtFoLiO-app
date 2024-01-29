import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Typography, Slide } from "@mui/material";
import { SchoolRounded } from '@mui/icons-material';
import { devEdu } from "../../constants/details";

const DevEduTimeline = ({loading}) => {
    return(
        <Timeline position="right">
        {
            devEdu.map((item, index) => (
                <Slide direction="up" in={loading} 
                style={{
                    transitionDelay: loading ? `${index + 2}99ms`: '0ms'
                }}
                >
                <TimelineItem key={index}>
                    <TimelineSeparator color="info">
                        <TimelineDot color="info" variant="outline"/>
                        <SchoolRounded color="info" />
                        {
                            index !== 2 ? 
                            ( <TimelineConnector />) 
                            :  null
                        }
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="caption" color='gray'>
                            {item.year}
                        </Typography>
                        <Typography variant="body1" color='black'>
                            {item.cert}
                        </Typography>
                        <Typography variant="body2" color='black'>
                            {item.major}
                        </Typography>
                        <Typography variant="body2" color='black'>
                            {item.university}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                </Slide>
            ))
        }                            
    </Timeline>

    )
};
export default DevEduTimeline;