import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next'
import TemplateDefault from "../../src/templates/Default";

const useStyles = makeStyles((theme: Theme ) => ({
  root: {},
  container: {
    padding: theme.spacing(8, 0, 6, 0)
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block'
  },
  cardMedia:{
   paddingTop: '56.25%', // 16:9
  }
}));
 
const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <TemplateDefault>
      <Box display='flex' flexDirection='column'>

      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" color='secondary'  variant='h2'align='center'>Meus Anúncios</Typography>
        <Button className={classes.buttonAdd} variant="contained" color='primary' style={{margin:'30px auto',display:'block'}}>
          Publicar novo anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} >
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={"https://source.unsplash.com/random"}
                title="Titulo do anúncio"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto x
                </Typography>
                <Typography variant="h5" component="h2">
                  R$ 100,99
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="primary">Remover</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={"https://source.unsplash.com/random"}
                title="Titulo do anúncio"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto x
                </Typography>
                <Typography variant="h5" component="h2">
                  R$ 100,99
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="primary">Remover</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={"https://source.unsplash.com/random"}
                title="Titulo do anúncio"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto x
                </Typography>
                <Typography variant="h5" component="h2">
                  R$ 100,99
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="primary">Remover</Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
      </Box>
    </TemplateDefault>
  )
}

export default Home
