import { Box,Theme } from "@mui/material";
import { makeStyles } from '@mui/styles';

import Footer from "../components/Footer";
import Header from "../components/Header";

interface IDefaultProps {
    children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme ) => ({
    container: {
        padding:theme.spacing(6,0,6),
    },
  }));

const Default = ({children}:IDefaultProps) => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Box className={classes.container}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Default;