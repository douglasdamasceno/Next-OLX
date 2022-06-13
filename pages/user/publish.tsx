import { Container, Typography,Theme,Box ,TextField,Select, 
        useTheme, Button, useMediaQuery, IconButton,FormControl, 
        InputLabel,
        OutlinedInput,
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
});

const Publish: React.FC = () => {
    const [files,setFiles] = useState<TFile[]>([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: {'image/*':[]},
        onDrop: (acceptedFile)=>{
           const newFiles = acceptedFile.map((file:File)=>{
               return Object.assign(file,{
                   preview:URL.createObjectURL(file)
               });
           });
           setFiles([...files,...newFiles]);
        }
    });

    const handleRemoveFile = (fileName:string):void =>{
        const newFileState = files.filter(file=>file.name!==fileName);
        setFiles(newFileState);
    }
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
                }}
                validationSchema={validationSchema}  
                onSubmit={(values)=>{
                    console.log(values);
                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleSubmit,
                        handleChange,
                    })=>{
                        console.log(errors);
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
                                        <FormControl error={!!errors.title} fullWidth>
                                            <InputLabel>ex.: Bicicleta Aro 18 com garantia</InputLabel>
                                            <Input 
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>{errors.title}</FormHelperText>
                                        </FormControl>
                                        <Typography component="h6" color='textPrimary'  variant='h6' >
                                            Categoria
                                        </Typography>
                                        <FormControl  error={!!errors.category} fullWidth>
                                            <Select
                                                name="category"
                                                fullWidth
                                                variant='standard'
                                                value={values.category}
                                                onChange={handleChange}
                                            >
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
                                        <Typography component="h6" color='textPrimary'  variant='h6'>
                                            Imagens
                                        </Typography>
                                        <Typography component="div" color='textPrimary'  variant='body2'>
                                            A primeira imagem é a foto principal do anúncio.
                                        </Typography>
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
                                                <input {...getInputProps()} />
                                                <Typography variant='body2' component="div" color='textPrimary'>
                                                    Clique para adicionar ou arraste a imagem.
                                                </Typography>
                                            </Box>
                                            {
                                                files.map((file:TFile,index)=>(
                                                    <Box
                                                        key={file.name}
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
                                        <Typography component="div" color='textPrimary'  variant='body2'>
                                            Escreva os detalhes do que está vendendo.
                                        </Typography>
                                        <FormControl error={!!errors.description} fullWidth>

                                        <TextField
                                            name="description"
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
                                        <br/>
                                        <FormControl  fullWidth variant='outlined'>
                                            <InputLabel>Valor</InputLabel>
                                            <OutlinedInput onChange={()=>{}} 
                                                startAdornment={<InputAdornment position='start'>R$</InputAdornment>} 
                                            />
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
                                            Descrição
                                        </Typography>
                                        <Typography component="div" color='textPrimary'  variant='body2'>
                                            Escreva os detalhes do que está vendendo.
                                        </Typography>
                                        <TextField
                                            label="Nome"
                                            size='small'
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <TextField
                                            label="E-mail"
                                            size='small'
                                            variant="outlined"
                                            fullWidth
                                        />
                                        <TextField
                                            label="Telefone"
                                            size='small'
                                            variant="outlined"
                                            fullWidth
                                        />
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