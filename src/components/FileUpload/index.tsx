import { Box, IconButton, Theme, Typography,useTheme } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

import {useStyles} from "./styles";

type TFile = typeof File & {
    preview: string;
}
interface Values{
    title:string;
    category:string;
    description:string;
    price:number;
    name:string;
    email:string;
    phone:number;
    // files:TFile[];
}

const FileUpload: React.FC = ({files,errors, touched,setFieldValue}:any) => {
    const classes = useStyles();
    const theme = useTheme();

    const {getRootProps, getInputProps} = useDropzone({
        accept: {'image/*':[]},
        onDrop: (acceptedFile)=>{
           const newFiles = acceptedFile.map((file:File)=>{
               return Object.assign(file,{
                   preview:URL.createObjectURL(file)
               });
           });
           setFieldValue("files",[...files,...newFiles]);
        }
    });

    const handleRemoveFile = (fileName:string):void =>{
        const newFileState = files.filter((file:TFile)=>file.name!==fileName);
        setFieldValue("files",newFileState);
    }

    return (
        <>
            <Typography component="h6" color={(errors && touched) ?'error':'textPrimary'}  variant='h6'>
                Imagens
            </Typography>
            <Typography component="div" color={(errors && touched)?'error':'textPrimary'}  variant='body2'>
                A primeira imagem é a foto principal do anúncio.
            </Typography>
            {
                (errors && touched) && (
                    <Typography gutterBottom color='error'  variant='body2'>
                        {errors}
                    </Typography>
                )  
            }
            <Box display="flex" flexWrap="wrap">
                <Box 
                    component="div"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    padding={1.25}
                    width="200px"
                    height="150px"
                    margin="0 10px 10px 0"
                    style={{ backgroundColor:theme.palette.background.paper}}
                    border="2px dashed black"
                    {...getRootProps()}
                >
                    <input name="files" {...getInputProps()} />
                    <Typography variant='body2' component="div" color={(errors && touched)?'error':'textPrimary'}>
                        Clique para adicionar ou arraste a imagem.
                    </Typography>
                </Box>
                {
                    files.map((file:TFile,index:number)=>(
                        <Box
                            key={index}
                            className={classes.thumb}
                            component="div"
                            style={{backgroundImage:`url(${file.preview})`}}
                            >
                            {
                                index === 0 && 
                                (
                                    <Box className={classes.mainImage}>
                                        <Typography variant='body2' component="div" color='secondary'>
                                            Principal
                                        </Typography>
                                    </Box>
                                )
                            }
                            <Box className={classes.mask}>
                                <IconButton color="secondary" onClick={()=> handleRemoveFile(file.name)}>
                                    <DeleteForever fontSize="large" />
                                </IconButton>
                            </Box>
                    </Box>
                    ))
                }
            </Box>
    </>
    );
}

export default FileUpload;