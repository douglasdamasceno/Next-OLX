import { Box, Container, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles((theme:Theme) =>({
    footer:{
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        }
    }
}));

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" component="footer" className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Box textAlign="center">
                        <Link href="#" passHref>
                            <Typography variant='subtitle1' color="textSecondary">Ajuda e Contato</Typography>
                            </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box textAlign="center">
                        <Link href="#" passHref>
                            <Typography variant='subtitle1' color="textSecondary">Dicas de Segurança</Typography>
                            </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box textAlign="center">
                        <Link href="#" passHref>
                            <Typography variant='subtitle1' color="textSecondary">Anunciar e Vender</Typography>
                            </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Box textAlign="center">
                        <Link href="#" passHref>
                            <Typography variant='subtitle1' color="textSecondary">Ajuda e Contato</Typography>
                            </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;