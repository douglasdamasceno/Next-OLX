import { createContext, useState,useContext, ReactElement } from "react";
import Toasty from "../components/Toasty";

interface  IToastyContext {
    message: string;
    severity: "success" | "error" | "warning";
    open: boolean;
}

interface  IToastyProviderProps {
    children: ReactElement;
}

const ToastyContext = createContext({
    setToasty: ({message ,severity, open}:IToastyContext) => {},
});

export const ToastyProvider = ({ children }:IToastyProviderProps) => {
    const [toasty, setToasty] = useState<IToastyContext>({ 
        message: "", 
        open: false, 
        severity: "success",
    });

     return (
        <ToastyContext.Provider value={{setToasty}}>
            <Toasty
                open={toasty.open}
                severity={toasty.severity}
                message={toasty.message}
                onClose={() => setToasty({ ...toasty, open: false })}
            />
            {children}
        </ToastyContext.Provider>
     )
}

const useToasty = () => useContext(ToastyContext);
export default useToasty;