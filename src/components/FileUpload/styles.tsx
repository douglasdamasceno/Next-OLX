
import { Theme } from "@mui/material";
import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    mask:{ },
    mainImage:{ },
    thumb:{
        position:'relative',
        width:200,
        height:150,
        backgroundSize:'cover',
        margin:'0 10px 10px 0',
        backgroundPosition:'center center',

        '& $mainImage':{
            backgroundColor:'blue',
            paddding:'10px 10px',
            position:'absolute',
            botttom:0,
            left:0,
        },

        '&:hover $mask':{
            display:'flex',
        },
        '& $mask':{
            backgroundColor:'rgba(0,0,0,0.7)',
            height:'100%',
            width:'100%',
            display:'none',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
        }
    },
}));