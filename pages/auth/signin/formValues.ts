
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email("Digite um email válido").required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatório'),
});

const initialValues={
    email:'',
    password:'',
};

export {
    validationSchema,
    initialValues,
}