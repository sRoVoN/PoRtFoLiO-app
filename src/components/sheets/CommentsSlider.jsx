import { CardContent, Typography, Box, Avatar, Card, } from '@mui/material';
import { Favorite, ThumbDownAltRounded } from '@mui/icons-material';
import Slider from 'react-slick';
import { comments } from '../../constants/details';

const CommentsSlider = () => {
    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: 'liner'
    }
    
    return(
        <Box component='div'
         sx={{justifyContent: 'center', alignItems: 'center', mt: 10}}>
        <Slider {...options}>
        {comments.map((comment, index) => (
            <Box key={index} component='div' 
            sx={{justifyContent: 'center'}}>
              <Avatar src={comment.avatar} variant='rounded'
              sx={{height: 100, width: 100, margin:'0 auto', pb: 3}}
              />
               <Typography variant='body1' color='black' textAlign='center'>
                {comment.fullname}
               </Typography>
               <Typography variant='body1' color='black' textAlign='center'>
                {comment.agree ? <Favorite sx={{fill:'red'}}/> : <ThumbDownAltRounded sx={{fill:'blue'}} />}
               </Typography>
               <Card 
               sx={{backgroundColor: 'palevioletred',
                textAlign: 'center',
                 width: 1/2, m:'0 auto', borderRadius: 5}}>
                <CardContent>
                    <Typography variant='body2' textAlign='center' >
                        {comment.comment}
                    </Typography>
                </CardContent>
               </Card>
            </Box>                
        ))}
        </Slider>
    </Box>
    )
}
export default CommentsSlider;