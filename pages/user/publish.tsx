import { Container, Typography,Theme,Box ,TextField,Select, useTheme} from '@mui/material';
import React from 'react';

import TemplateDefault from "../../src/templates/Default";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme:Theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6)
    },
    box:{
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing(2),
        backgroundColor:theme.palette.background.default,
        padding:theme.spacing(3),
    }
}));

const Publish: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
  return (
      <TemplateDefault>
            <Container maxWidth="sm">
                <Typography component="h1" color='textPrimary'  variant='h2' align='center'>
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" color='textPrimary'  variant='h5' align='center'>
                    Quanto mais detalhado, mais vendas!
                </Typography>
            </Container>
            <Container maxWidth="md">
                <Box 
                    display="flex" 
                    flexDirection="column"
                    gap={2} 
                    bgcolor={theme.palette.background.default}
                    padding={3}
                >
                    <Typography component="h5" color='textPrimary'  variant='h5' >
                        Título do anúncio
                    </Typography>
                    <TextField 
                        label="ex: Bicicleta Aro 18 com garantia"
                        size="small"
                        fullWidth
                        variant="standard"
                    />
                    <Typography component="h6" color='textPrimary'  variant='h6' >
                        Categoria
                    </Typography>
                    <Select
                        variant='standard'
                        native
                        fullWidth
                        value=""
                        label="Age"
                        onChange={()=>{}}
                        inputProps={{
                            name: 'category',
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value={1}>Bebê e Criança</option>
                        <option value={2}>Agricultura</option>
                        <option value={3}>Moda</option>
                        <option value={4}>Carro</option>
                    </Select>
                </Box>

            </Container>  
      </TemplateDefault>
  );
}

export default Publish;