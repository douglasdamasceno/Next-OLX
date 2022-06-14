import { Container, Typography,Theme,Box ,TextField,Select, 
        useTheme, Button, useMediaQuery, IconButton,FormControl, 
        InputLabel,
        InputAdornment,
        MenuItem,
        FormHelperText,
        Input,
    } from '@mui/material';
import React, { useState } from 'react';

import TemplateDefault from "../../src/templates/Default";
import {makeStyles} from "@mui/styles";

import { DeleteForever } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import { Formik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles((theme:Theme) => ({
    box:{
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing(2),
        backgroundColor:theme.palette.background.default,
        padding:theme.spacing(3),
    },
    mask:{ },
    mainImage:{ },
    thumb:{
        position:'relative',
        width:200,
        height:150,
        backgroundSize:'cover',
        margin:'0 10px 10px 0',
        backgroundPosition:'center center',

        '& $mainImage':{
            backgroundColor:'blue',
            paddding:'10px 10px',
            position:'absolute',
            botttom:0,
            left:0,
        },

        '&:hover $mask':{
            display:'flex',
        },
        '& $mask':{
            backgroundColor:'rgba(0,0,0,0.7)',
            height:'100%',
            width:'100%',
            display:'none',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
        }
    },
}));

type TFile = typeof File & {
    preview: string;
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6,"Escreva um título maior")
        .max(100,"Escreva um título menor")
        .required('Título é obrigatório'),
    category: yup.string().required('Categoria é obrigatória'),
    description: yup.string()
    .min(6,"Escreva um título maior")
    .max(100,"Escreva um título menor")
    .required('Descrição é obrigatório'),
    price: yup.number().required('Preço é obrigatória'),
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email("Digite um email válido").required('Email é obrigatório'),
    phone: yup.number().required('Telefone é obrigatório'),
    files: yup.array().min(1,'Envie pelo menos uma foto').required('Fotos é obrigatória'),
});

interface Values{
    title:string;
    category:string;
    description:string;
    price:number;
    name:string;
    email:string;
    phone:number;
    files:TFile[];
}

const Publish: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmDown = useMediaQuery((theme:Theme)=>theme.breakpoints.down('sm'));
    
  return (
      <TemplateDefault>
            <Box maxWidth="sm" component={Container}>
                <Typography component="h1" color='textPrimary'  variant='h2' align='center'>
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" color='textPrimary'  variant='h5' align='center'>
                    Quanto mais detalhado, mais vendas!
                </Typography>
            </Box>

            <Formik
                initialValues={{
                    title:'',
                    category:'',
                    description:'',
                    price:0,
                    name:'',
                    email:'',
                    phone:0,
                    files:[],
                }}
                validationSchema={validationSchema}  
                onSubmit={(values:Values)=>{
                    console.log(values);
                }}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        setFieldValue,
                    })=>{
                        const {getRootProps, getInputProps} = useDropzone({
                            accept: {'image/*':[]},
                            onDrop: (acceptedFile)=>{
                               const newFiles = acceptedFile.map((file:File)=>{
                                   return Object.assign(file,{
                                       preview:URL.createObjectURL(file)
                                   });
                               });
                               setFieldValue("files",[...values.files,...newFiles]);
                            }
                        });
                    
                        const handleRemoveFile = (fileName:string):void =>{
                            const newFileState = values.files.filter((file:TFile)=>file.name!==fileName);
                            setFieldValue("files",newFileState);
                        }

                        return(
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth="md">
                                    <Box 
                                        display="flex" 
                                        flexDirection="column"
                                        gap={2} 
                                        bgcolor={theme.palette.background.default}
                                        padding={3}
                                        marginBottom={3}
                                    >
                                        <Typography component="h5" color='textPrimary'  variant='h5' >
                                            Título do anúncio
                                        </Typography>
                                        <FormControl error={!!errors.title && touched.name} fullWidth>
                                            <InputLabel>ex.: Bicicleta Aro 18 com garantia</InputLabel>
                                            <Input 
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <FormHelperText>{errors.title}</FormHelperText>
                                        </FormControl>
                                        <Typography component="h6" color='textPrimary'  variant='h6' >
                                            Categoria
                                        </Typography>
                                        <FormControl  error={!!errors.category && touched.category} fullWidth>
                                            <Select
                                                name="category"
                                                fullWidth
                                                variant='standard'
                                                value={values.category}
                                                onChange={handleChange}
                                            >
                                                <MenuItem disabled value="">Selecione uma dessas Categorias</MenuItem>
                                                <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                                                <MenuItem value="Carro">Carro</MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                            </Select>
                                            <FormHelperText>{errors.category}</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Box 
                                        display="flex" 
                                        flexDirection="column"
                                        gap={2} 
                                        bgcolor={theme.palette.background.default}
                                        padding={3}
                                        marginBottom={3}
                                    >
                                        <Typography component="h6" color={(errors.files && touched.files) ?'error':'textPrimary'}  variant='h6'>
                                            Imagens
                                        </Typography>
                                        <Typography component="div" color={(errors.files && touched.files)?'error':'textPrimary'}  variant='body2'>
                                            A primeira imagem é a foto principal do anúncio.
                                        </Typography>
                                        {
                                            (errors.files && touched.files) && (
                                                <Typography gutterBottom color='error'  variant='body2'>
                                                    {errors.files}
                                                </Typography>
                                            )  
                                        }
                                        <Box display="flex" flexWrap="wrap">
                                            <Box 
                                                component="div"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                textAlign="center"
                                                padding={1.25}
                                                width="200px"
                                                height="150px"
                                                margin="0 10px 10px 0"
                                                style={{ backgroundColor:theme.palette.background.paper}}
                                                border="2px dashed black"
                                                {...getRootProps()}
                                            >
                                                <input name="files" {...getInputProps()} />
                                                <Typography variant='body2' component="div" color={(errors.files && touched.files)?'error':'textPrimary'}>
                                                    Clique para adicionar ou arraste a imagem.
                                                </Typography>
                                            </Box>
                                            {
                                                values.files.map((file:TFile,index)=>(
                                                    <Box
                                                        key={index}
                                                        className={classes.thumb}
                                                        component="div"
                                                        style={{backgroundImage:`url(${file.preview})`}}
                                                        >
                                                        {
                                                            index === 0 && 
                                                            (
                                                                <Box className={classes.mainImage}>
                                                                    <Typography variant='body2' component="div" color='secondary'>
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                            )
                                                        }
                                                        <Box className={classes.mask}>
                                                            <IconButton color="secondary" onClick={()=> handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize="large" />
                                                            </IconButton>
                                                        </Box>
                                                </Box>
                                                ))
                                            }
                                            
                                        </Box>
                                    </Box>
                                    <Box 
                                        display="flex" 
                                        flexDirection="column"
                                        gap={2} 
                                        bgcolor={theme.palette.background.default}
                                        padding={3}
                                        marginBottom={3}
                                    >
                                        <Typography component="h6" color='textPrimary'  variant='h6'>
                                            Descrição
                                        </Typography>
                                            <InputLabel>Escreva os detalhes do que está vendendo.</InputLabel>
                                        <FormControl error={!!errors.description && touched.description} fullWidth>
                                            <TextField
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                />
                                            <FormHelperText>{errors.description}</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Box display="flex" 
                                        flexDirection="column"
                                        gap={2} 
                                        bgcolor={theme.palette.background.default}
                                        padding={3}
                                        marginBottom={3}>
                                        <Typography component="h6" color='textPrimary'  variant='h6'>
                                            Preço
                                        </Typography>
                                        <FormControl error={!!errors.price && touched.price}  fullWidth variant='outlined'>
                                            <Input 
                                                type='number'
                                                name="price"
                                                value={values.price}
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position='start'>R$</InputAdornment>} 
                                            />
                                            <FormHelperText>{errors.price}</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    <Box 
                                        display="flex" 
                                        flexDirection="column"
                                        gap={2} 
                                        bgcolor={theme.palette.background.default}
                                        padding={3}
                                        marginBottom={3}
                                    >
                                        <Typography component="h6" color='textPrimary'  variant='h6'>
                                            Dados de Contato
                                        </Typography>
                                        <FormControl error={!!errors.name && touched.name} fullWidth>
                                            <InputLabel>Nome</InputLabel>
                                                <Input 
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                            <FormHelperText>{errors.name}</FormHelperText>
                                        </FormControl>
                                        <FormControl error={!!errors.email && touched.email} fullWidth>
                                            <InputLabel>Email</InputLabel>
                                            <Input
                                                name="email"
                                                type='email'
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>{errors.email}</FormHelperText>
                                        </FormControl>
                                        <FormControl error={!!errors.phone && touched.phone} fullWidth>
                                            <InputLabel>Telefone</InputLabel>
                                            <Input
                                                type='tel'
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>{errors.phone}</FormHelperText>
                                        </FormControl>
                                    </Box>
                                    
                                    <Box textAlign="end">
                                        <Button variant="contained" type='submit' color="primary" fullWidth={isSmDown}>
                                            Publicar Anúncio
                                        </Button>
                                    </Box> 
                                </Container>  
                            </form>
                        )
                    }
                }

            </Formik>
            
      </TemplateDefault>
  );
}

export default Publish;