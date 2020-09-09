import React from 'react';
import { Form } from '@unform/web'
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import LogoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    function handleSubmit(data: object):void {
        console.log(data);
    }

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="GoBarber"/>
                <Form onSubmit={handleSubmit}>
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
    )
}
    
        
;

export default SignIn;