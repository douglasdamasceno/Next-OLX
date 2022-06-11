import {createTheme} from "@mui/material";
import { purple} from "@mui/material/colors";

export const LightTheme = createTheme({
    palette:{
        mode:'light',
        primary:{
            main:purple[700],
            dark:purple[800],
            light:purple[500],
        },
        background:{
            default:'rgba(242,244,245)',
            paper:'#fff',
        }
    },
});