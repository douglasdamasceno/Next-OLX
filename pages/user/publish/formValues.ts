
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6,"Escreva um título maior")
        .max(100,"Escreva um título menor")
        .required('Título é obrigatório'),
    category: yup.string().required('Categoria é obrigatória'),
    description: yup.string()
    .min(6,"Escreva um título maior")
    .max(100,"Escreva um título menor")
    .required('Descrição é obrigatório'),
    price: yup.number().required('Preço é obrigatória'),
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email("Digite um email válido").required('Email é obrigatório'),
    phone: yup.number().required('Telefone é obrigatório'),
    files: yup.array().min(1,'Envie pelo menos uma foto').required('Fotos é obrigatória'),
});

const initialValues={
    title:'',
    category:'',
    description:'',
    price:Number(),
    name:'',
    email:'',
    phone:Number(),
    files:[],
};

export {
    validationSchema,
    initialValues,
}