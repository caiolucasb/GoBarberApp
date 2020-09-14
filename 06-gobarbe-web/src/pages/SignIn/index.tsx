import React, { useCallback, useRef, useContext } from 'react';
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import LogoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';

import getValidationErrors from '../../utils/getValidationErrors';
import {useAuth} from '../../hooks/auth';
import {useToast} from '../../hooks/toast';

interface SignInFormData {
    email: string;
    password: string;
}




const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try{
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data,{
                abortEarly: false,
            });
            await signIn({
                email: data.email,
                password: data.password,
            });
        }catch(err){
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors)
            }
            addToast();
        }
    }, [signIn, addToast])

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="GoBarber"/>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    
                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password"  placeholder="Senha"/>

                    <Button type="submit">Entrar</Button>
                    <a href="forgot">Esqueci minha senha</a>
                </Form>
                    <a href="">
                        <FiLogIn/>
                        Criar conta
                    </a>
                
            </Content>  
            <Background/>
        </Container>
    );
};

export default SignIn;