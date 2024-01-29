import EllipsisText from "react-ellipsis-text";
import {  projects } from "../../constants/projects";
import {  Slide, Typography, Card, CardActionArea, CardMedia, Button, CardActions, CardContent} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const MyProjects = ({loading}) => {
    return(
        <>
            {
              projects.map((project, index) => (
                <Grid2 key={index} xs={12} sm={6} md={6} lg={4}
                        sx={{px:2, mb:2}}
                >
                    <Slide direction="up" in={loading} 
                            style={{
                                transitionDelay: loading ? `${index + 4}99ms` : '0ms'
                            }}
                            >
                    <Card sx={{maxWidth: 300, backgroundColor: 'steelblue'}}>
                         <CardActionArea>
                            <CardMedia 
                              component='img'
                              height='100'
                              width='250'
                              image={project.image}
                            />
                             <CardContent>
                                 <Typography variant="body1" textAlign='left' gutterBottom>
                                     {project.title}
                                     {"    "}
                                     <Typography  variant="body3" textAlign='right' color='pink'>"{project.app}"</Typography>                                                
                                 </Typography>
                                        <Typography variant="body2" textAlign='left' gutterBottom color='text.secondary'>
                                         <EllipsisText 
                                         text={project.info}
                                           length={'50'}
                                          />
                                    </Typography>
                                </CardContent>
                             </CardActionArea>
                             <CardActions>
                             <Button 
                             href={project.link}
                             size="small"
                             color="error"
                             target="_blank"                
                             >more</Button>
                             </CardActions>                     
                                </Card>
                            </Slide>                            
                        </Grid2>
                    ))
                }
        </>
    )
};

export default MyProjects;