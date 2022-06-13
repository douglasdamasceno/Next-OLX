import {useState} from 'react';
import {AppBar, Toolbar, Typography,Button, IconButton, Container, Avatar, Menu, MenuItem, Divider, useMediaQuery, Theme} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  divider: {
    margin: '8px 0'
  },
}));

export default function Header() {
  const [anchorUserMenu,setAnchorUserMenu] = useState<HTMLButtonElement | null>(null);
  const opnenUserMenu = Boolean(anchorUserMenu);
  const classes = useStyles();
  
  const isSmDown = useMediaQuery((theme:Theme)=>theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar position="static" elevation={3} >
        <Container maxWidth="md" >
          <Toolbar>
            
            <Link href="/" passHref>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Next Olx
              </Typography>
            </Link>
            {
              !isSmDown &&
              (
                <Link href="/user/publish" passHref>
                  <Button color="inherit" variant="outlined">Anunciar e Vender</Button>
                </Link>
              ) 
            }

            <Button  color="secondary" onClick={(event)=> setAnchorUserMenu(event.currentTarget)}>
              <Typography marginLeft={2} marginRight={1} variant="subtitle2" color="secondary" >
                  Douglas Damasceno
              </Typography>
              <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" >
                <AccountCircle />
              </Avatar>
            </Button>

            <Menu
              open={opnenUserMenu}
              anchorEl={anchorUserMenu}
              onClose={()=> setAnchorUserMenu(null)}
            > 
              <Link href="/user/dashboard" passHref>
                  <MenuItem>Meus Anúncios</MenuItem>
              </Link>
              <Link href="/" passHref>
                <MenuItem>Publicar novo Anúncios</MenuItem>
              </Link>
              <Divider className={classes.divider} />
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}