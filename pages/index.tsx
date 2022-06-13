import { Box, Grid, IconButton, InputBase, Paper, Theme, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

import TemplaDefault from '../src/templates/Default';
import Card from '../src/components/Card';

const useStyles = makeStyles((theme:Theme) =>({
   
    searchBox:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(0,2) ,
        marginTop:20,
        backgroundColor: theme.palette.background.paper,
    },
    cardGrid:{
        marginTop: theme.spacing(6),
    }
}));

const  Home: React.FC = () => {
    const classes = useStyles();

    return (
        <TemplaDefault>
            <Container maxWidth="md">
                <Typography component="h1" variant="h3" align='center' color="textPrimary">
                    O que deseja encontrar?
                </Typography>
                <Box component={Paper}  className={classes.searchBox}>
                    <InputBase placeholder='Ex.: celular novo com garantia' />
                    <IconButton>
                        <SearchIcon>search</SearchIcon>
                    </IconButton>
                </Box>
            </Container>
            <Container maxWidth="lg" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align='center' color="textPrimary">
                    Destaques
                </Typography>
                <Grid container spacing={4} marginTop={1}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            title='Produto XL' 
                            subtitle='R$ 100,00'
                            image={"https://source.unsplash.com/random"}
                        /> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            title='Produto XL' 
                            subtitle='R$ 100,00'
                            image={"https://source.unsplash.com/random"}
                        /> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            title='Produto XL' 
                            subtitle='R$ 100,00'
                            image={"https://source.unsplash.com/random"}
                        /> 
                    </Grid>
                </Grid>
            </Container>
        </TemplaDefault>
    );
}

export default Home;