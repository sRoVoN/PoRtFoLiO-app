import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Typography, Slide } from "@mui/material";
import { WorkHistoryRounded } from '@mui/icons-material';
import { devCareer, } from "../../constants/details";

const DevCarTimeline = ({loading}) => {
    return(
        <Timeline position="right">
        {
            devCareer.map((item, index) => (
                <Slide direction="up" in={loading} 
                style={{
                    transitionDelay: loading ? `${index + 4}99ms`: '0ms'
                }}
                >
                <TimelineItem key={index}>
                    <TimelineSeparator color="warning">
                        <TimelineDot color="warning" variant="outline"/>
                        <WorkHistoryRounded color="warning" />
                        {
                            index !== 1 ? 
                            ( <TimelineConnector />) 
                            :  null
                        }
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="caption" color='gray'>
                            {item.year}
                        </Typography>
                        <Typography variant="body1" color='black'>
                            {item.as}
                        </Typography>
                        <Typography variant="body2" color='black'>
                            {item.office}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                </Slide>
            ))
        }                            
    </Timeline>

    )
};
export default DevCarTimeline;