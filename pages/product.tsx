import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NextPage } from 'next';
import Carousel from "react-material-ui-carousel";

import TemplateDefault from  '../src/templates/Default';

const useStyles = makeStyles((theme:Theme) => ({
    box:{
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName:{
        margin:'15px 0' ,
    },
    price:{
        fontWeight:'bold',
        marginBottom:15,
    },
    card:{
        height:'100%',
    },
    cardMedia:{
        paddingTop: '56.25%',
    }
}));
const Product:  NextPage = () => {
    const classes = useStyles();
    return (
      <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                autoPlay={false}
                                animation="slide" 
                                navButtonsAlwaysVisible
                                navButtonsProps={{
                                    style: {
                                        color:'white',
                                    }
                                }} 
                            >
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random?a=1"
                                        title="Titulo da imagem"
                                        />
                                </Card>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random?a=2"
                                        title="Titulo da imagem"
                                        />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption">
                                Publicado em 01/01/2019
                            </Typography>
                            <Typography component="h4" variant='h4' className={classes.productName}>
                                Jaguar XE 2.0 D R-Sport Aut.
                            </Typography>
                            <Typography component="h4" variant='h4' className={classes.price}>R$ 50.000,00</Typography>
                            <Chip label="Categoria" color="primary" />
                        </Box>
                        <Box className={classes.box} textAlign="left">
                            <Typography component="h6" variant='h6'>Descrição</Typography>
                            <Typography component="p" variant='body2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, beatae! Dignissimos fugit,
                                animi excepturi atque laudantium culpa eveniet, quae voluptas fuga dolor voluptates commodi quo
                                nulla, rem minus nihil hic.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader 
                                avatar={<Avatar>DD</Avatar>}
                                title="Douglas Damasceno"
                                subheader="douglas@gmail.com"
                            />
                            <CardMedia 
                                image="https://source.unsplash.com/random"
                                title="Douglas Damasceno"
                            />
                        </Card>
                        <Box className={classes.box}>
                            <Typography component="h6" variant='h6'>Localização</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
      </TemplateDefault>
  );
}

export default Product;