import { Snackbar, Alert } from "@mui/material";

interface IToastyProps {
    message: string;
    severity: "success" | "error" | "warning" | "info";
    open: boolean;
    onClose?: () => void;
}

const Toasty = ({ message, open,severity,onClose }:IToastyProps) => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        if(onClose) onClose();
      };
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert
                variant="filled" 
                severity={severity} 
                onClose={handleClose}>
                {message}
            </Alert>
        </Snackbar>
    )
}
export default Toasty;