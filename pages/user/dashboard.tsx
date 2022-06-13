import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next'
import Card from '../../src/components/Card';
import TemplateDefault from "../../src/templates/Default";

const useStyles = makeStyles(() => ({
  buttonAdd: {
    margin: '30px auto',
    display: 'block'
  },
}));
 
const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Box display='flex' flexDirection='column'>

      <Container maxWidth="sm">
        <Typography component="h1" color='primary'  variant='h2'align='center'>Meus Anúncios</Typography>
        <Button className={classes.buttonAdd} variant="contained" color='primary' style={{margin:'30px auto',display:'block'}}>
          Publicar novo anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} >
            <Card 
              title='Produto XL' 
              subtitle='R$ 100,00'
              image={"https://source.unsplash.com/random"}
              actions={
                <>
                  <Button size="small" color="primary" variant='contained'>Editar</Button>
                  <Button size="small" color="primary" variant='contained'>Remover</Button>
                </>
              }
            />          
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Card 
              title='Produto XL' 
              subtitle='R$ 100,00'
              image={"https://source.unsplash.com/random"}
              actions={
                <>
                  <Button size="small" color="primary" variant='contained'>Editar</Button>
                  <Button size="small" color="primary" variant='contained'>Remover</Button>
                </>
              }
            />          
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Card 
              title='Produto XL' 
              subtitle='R$ 100,00'
              image={"https://source.unsplash.com/random"}
              actions={
                <>
                  <Button size="small" color="primary" variant='contained'>Editar</Button>
                  <Button size="small" color="primary" variant='contained'>Remover</Button>
                </>
              }
            />          
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Card 
              title='Produto XL' 
              subtitle='R$ 100,00'
              image={"https://source.unsplash.com/random"}
              actions={
                <>
                  <Button size="small" color="primary" variant='contained'>Editar</Button>
                  <Button size="small" color="primary" variant='contained'>Remover</Button>
                </>
              }
            />          
          </Grid>
        </Grid>
      </Container>
      </Box>
    </TemplateDefault>
  )
}

export default Home
