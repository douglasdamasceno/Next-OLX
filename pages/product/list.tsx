import { Search } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, InputBase, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NextPage } from 'next';
import Card from '../../src/components/Card';
import TemplateDefault from '../../src/templates/Default';

const useStyles = makeStyles((theme:Theme) =>({
    box:{
        marginBottom: theme.spacing(6),
        backgroundColor: theme.palette.background.default,
    },
    searchBox:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(0,2),
        marginBottom: theme.spacing(6),
    },
    searchInput:{
        flexGrow: 1,
    }
}));

const List: NextPage = () => {
    const classes = useStyles();
  return (
      <TemplateDefault>
        <Container maxWidth="lg">
            <Box component={Paper}  className={classes.searchBox}>
                <InputBase className={classes.searchInput} placeholder='Ex: iPhone XS Max com garantia'/>
                <IconButton>
                    <Search />
                </IconButton>
            </Box>
            <Box classes={classes.box}>
                <Typography component="h6" variant="h6">Anúnicios</Typography>
                <Typography component="span" variant="subtitle2">
                    ENCONTRADOS 200 ANÚNCIOS
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
            </Box>
        </Container>
      </TemplateDefault>
  );
}

export default List;