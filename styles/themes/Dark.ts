import {createTheme} from "@mui/material";
import { purple,cyan, orange} from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:purple[700],
            dark:purple[800],
            light:purple[500],
            contrastText:'#ffffff',
        },
        secondary:{
            main:orange[500],
            dark:orange[400],
            light:orange[300],
            contrastText:'#fff00',
        },
        background:{
            default:'#303134',
            paper:'#000000',
        }
    },
    typography:{
        allVariants:{
            color:'#fff',
        }
    }
});