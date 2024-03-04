import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup.string().min(6).max(15).required(),
    password: yup.string().min(6).max(15).required()
})

export default loginSchema;