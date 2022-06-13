import React from 'react';

import { Card as CardMUI, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface ICardProps {
    title: string;
    image: string; 
    subtitle: string;
    actions?: React.ReactNode;
}


const useStyles = makeStyles(() => ({
    cardMedia:{
     paddingTop: '56.25%',
    }
}));
 
  
export default function Card({image,title,subtitle,actions}:ICardProps){
    const classes = useStyles();

    return (
        <CardMUI>
            <CardMedia 
                className={classes.cardMedia}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {subtitle}
                </Typography>
            </CardContent> 
            {
                actions && 
                (
                <CardActions>
                    {actions}
                </CardActions>

                )
            }
        </CardMUI>
    );
}
