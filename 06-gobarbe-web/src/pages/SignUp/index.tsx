import React from 'react';
import { Form } from '@unform/web'
import {FiArrowLeft, FiMail,FiUser, FiLock } from "react-icons/fi";

import LogoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
    function handleSubmit(data: object):void {
        console.log(data)
    }
    return (
        <Container>
        <Background/>
            <Content>
                <img src={LogoImg} alt="GoBarber"/>
                <Form initialData={{ name: 'Diego'}} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    
                    <Input name="name" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} type="password"  placeholder="Senha"/>

                    <Button type="submit">Cadastrar</Button>
                </Form>
                    <a href="login">
                        <FiArrowLeft/>
                         Voltar para Logon
                    </a>
                
            </Content>  
        </Container>
    );
};

export default SignUp;