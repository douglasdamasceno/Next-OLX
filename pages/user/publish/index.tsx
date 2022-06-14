import { Container, Typography,Theme,Box ,TextField,Select, 
        useTheme, Button, useMediaQuery,FormControl, 
        InputLabel,InputAdornment,MenuItem,FormHelperText,Input,
    } from '@mui/material';

    
import { Formik } from 'formik';
    
import TemplateDefault from "../../../src/templates/Default";

import {validationSchema,initialValues} from "./formValues";
import FileUpload from '../../../src/components/FileUpload';


const Publish: React.FC = () => {
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
                initialValues={initialValues}
                validationSchema={validationSchema}  
                onSubmit={(values)=>{
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
                                       <FileUpload
                                            files={values.files}
                                            errors={errors.files}
                                            touched={touched.files}
                                            setFieldValue={setFieldValue}
                                       />
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