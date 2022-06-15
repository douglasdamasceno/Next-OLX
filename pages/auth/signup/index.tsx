import { 
    Box, Button, 
    Container,useTheme, 
    FormControl, FormHelperText, 
    Input, InputLabel, Typography,CircularProgress } from '@mui/material';
import React from 'react';

import { Formik } from 'formik';
import axios from 'axios';
    
import { Theme } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {initialValues,validationSchema} from "./formValues";
import { useRouter } from 'next/router';

import TemplateDefault from "../../../src/templates/Default";

import useToasty  from "../../../src/contexts/Toasty";

export const useStyles = makeStyles((theme:Theme) => ({
    box:{
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing(2),
        backgroundColor:theme.palette.background.default,
        padding:theme.spacing(3),
    },
}));

const Signup: React.FC = () => {
    const classes = useStyles();
    const {setToasty} = useToasty();
    const router = useRouter();
    const theme = useTheme();

    const handleFormSubmit = async (user:any) => {
        const response = await axios.post('/api/users',user);
        if(response.data.success === 200){
            setToasty({message:"Usuário criado com sucesso!",severity:"success",open:true});
            router.push('/');
        }
    }

  return (
      <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" color='textPrimary'  variant='h2' align='center'>
            Crie sua conta
        </Typography>
        <Typography component="h5" color='textPrimary'  variant='h5' align='center'>
            E anuncie para todo o Brasil
        </Typography>
      </Container>
      <Container maxWidth="md">
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}  
                onSubmit={handleFormSubmit}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        isSubmitting,
                    })=>{
                        
                        return( 
                           <form onSubmit={handleSubmit}>
                                <Box 
                                    display="flex" 
                                    flexDirection="column"
                                    gap={2} 
                                    bgcolor={theme.palette.background.default}
                                    padding={3}
                                    marginBottom={3}
                                    marginTop={3}
                                >
                                    <FormControl error={!!errors.name && touched.name} fullWidth>
                                        <InputLabel>Nome</InputLabel>
                                        <Input 
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <FormHelperText>{errors.name}</FormHelperText>
                                    </FormControl>
                                    <FormControl error={!!errors.email && touched.email} fullWidth>
                                        <InputLabel>Email</InputLabel>
                                        <Input 
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <FormHelperText>{errors.email}</FormHelperText>
                                    </FormControl>

                                    <FormControl error={!!errors.password && touched.password} fullWidth>
                                        <InputLabel>Senha</InputLabel>
                                        <Input 
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="password"
                                        />
                                        <FormHelperText>{errors.password}</FormHelperText>
                                    </FormControl>
                                    <FormControl error={!!errors.passwordConfirmation && touched.passwordConfirmation} fullWidth>
                                        <InputLabel>Confirmação de senha</InputLabel>
                                        <Input 
                                            name="passwordConfirmation"
                                            value={values.passwordConfirmation}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="password"
                                        />
                                        <FormHelperText>{errors.passwordConfirmation}</FormHelperText>
                                    </FormControl>
                                    
                                    <Button 
                                        type="submit"
                                        variant='contained'  
                                        color='primary' 
                                        fullWidth
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? <CircularProgress size={18}/>:'Cadastrar'}
                                    </Button>
                                </Box>
                            </form>
                   )
                    }
                }
            </Formik> 
      </Container>
      </TemplateDefault>
  );
}

export default Signup;