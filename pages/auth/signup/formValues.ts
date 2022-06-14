
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email("Digite um email válido").required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatório'),
    passwordConfirmation: yup.string()
    .required('Confirmação de senha é obrigatório')
    .oneOf([yup.ref('password'), null], 'Senhas não conferem')
});

const initialValues={
    name:'',
    email:'',
    password:'',
    passwordConfirmation:'',
};

export {
    validationSchema,
    initialValues,
}