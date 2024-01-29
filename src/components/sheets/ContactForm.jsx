import ReCAPTCHA from 'react-google-recaptcha';
import { CardContent,TextField, InputAdornment, CardActions, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {  Face6Rounded, EmailRounded, SubjectRounded } from '@mui/icons-material';
import { ContactValidationSchema } from '../../validations/ContactValidation';
import { useFormik } from 'formik';

const ContactForm = () => {

    const contactInputNames = {
        Fullname: "",
        Email: "",
        Subject: "",
        Comment: ""
    };  
    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {
            console.log("Form values:", values);
        },
        validationSchema : ContactValidationSchema
    });   
    

    return(
        <form autoComplete='off' 
        onSubmit={formik.handleSubmit}
        >
           <CardContent>
               <Grid2 container>
                   <Grid2 xs={12} >
                       <Grid2 container spacing={2} columns={12}>
                           <Grid2 xs={12} md={6} lg={6} xl={6}>
                               <TextField 
                               fullWidth
                               size='small'
                               color='warning'
                               label="Fullname"
                               name="Fullname"
                               variant='outlined'
                               helperText={
                                   formik.touched.Fullname ? 
                                   formik.errors.Fullname : null
                               }
                               error={ Boolean(
                                   formik.values?.Fullname
                               )}
                               onChange={formik.handleChange}
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position='end'>
                                           <Face6Rounded />
                                       </InputAdornment>
                                   )
                               }}
                               />
                           </Grid2>
                           <Grid2 xs={12} md={6} lg={6} xl={6}>
                               <TextField 
                               fullWidth
                               size='small'
                               label="Email"
                               name="Email"
                               color='warning'
                               variant='outlined'
                               helperText={
                                   formik.touched.Email ? 
                                   formik.errors.Email : null
                               }
                               error={ Boolean(
                                   formik.values?.Email
                               )}
                               onChange={formik.handleChange}
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position='end'>
                                           <EmailRounded />
                                       </InputAdornment>
                                   )
                               }}
                               />
                           </Grid2>
                           <Grid2 xs={12}>
                               <TextField 
                               fullWidth
                               size='small'
                               label="Subject"
                               name="Subject"
                               color='warning'
                               variant='outlined'
                               helperText={
                                   formik.touched.Subject ? 
                                   formik.errors.Subject : null
                               }
                               error={ Boolean(
                                   formik.values?.Subject
                               )}
                               onChange={formik.handleChange}
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position='end'>
                                           <SubjectRounded />
                                       </InputAdornment>
                                   )
                               }}
                               />
                           </Grid2>
                           <Grid2 xs={12} md={12}>
                               <TextField
                               multiline
                               size='small'
                               label="Comment"
                               name="Comment"
                               rows={6}
                               fullWidth
                               color='warning'
                               variant='outlined' 
                               helperText={
                                   formik.touched.Comment ? 
                                   formik.errors.Comment : null
                               }
                               error={ Boolean(
                                   formik.values?.Comment
                               )}
                               onChange={formik.handleChange}                                           
                               />
                           </Grid2>
                       </Grid2>
                   </Grid2>
               </Grid2>
           </CardContent>
           <CardActions sx={{alignItems: 'end', flexDirection: 'column'}}>
               <ReCAPTCHA sitekey='6LcyqlkjAAAAAPABktGYTLvjaXenTBmilJKLBOE9' />
               <Button
                type='submit' 
                color='success' 
                sx={{mt: 2}}
                fullWidth
                variant='contained'>
                   Send
               </Button>
           </CardActions>

        </form>

    )
};
export default ContactForm;