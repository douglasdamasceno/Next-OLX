import { 
  Box, Button, 
  Container,useTheme, 
  FormControl, FormHelperText, 
  Input, InputLabel, Typography,CircularProgress, Alert } from '@mui/material';
import React from 'react';

import { Formik } from 'formik';
  
import {initialValues,validationSchema} from "./formValues";
import { useRouter } from 'next/router';

import TemplateDefault from "../../../src/templates/Default";

import useToasty  from "../../../src/contexts/Toasty";
import { useSession, signIn } from "next-auth/client";

const Signin: React.FC = () => {
  const {setToasty} = useToasty();
  const router = useRouter();
  const [session] = useSession();

  const theme = useTheme();
  console.log(session);  
  const handleFormSubmit = async (user:any) => {
    signIn('credentials', {
        email: user.email,
        password: user.password,
        callbackUrl:'http://localhost:3000/user/dashboard'
    });

  }

return (
    <TemplateDefault>
    <Container maxWidth="sm">
      <Typography component="h1" color='textPrimary'  variant='h3' align='center'>
          Acesse sua conta agora
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
                                {
                                    router.query.i==='1' && ( <Alert severity="error">Email ou senha inválidos</Alert>)
                                }
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
                                <Button 
                                    type="submit"
                                    variant='contained'  
                                    color='primary' 
                                    fullWidth
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <CircularProgress size={18}/>:'Entrar'}
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

export default Signin;