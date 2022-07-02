import React,{Fragment} from 'react'
// import Header from '../../../components/header'
// import { Column, Section, Title, Card } from "rbx";
import LogoImage from '../../../assets/images/logo-transparente.png'
import Container from 'react-bootstrap/Container';
import '../../../styles/auth.scss'
import RegisterForm from '../../../components/auth/register_form/index'


const RegisterScreen = ()=>(
        <Fragment>
            <Container>
                <div className="center">
                    <div className='container-login'>
                        <div className='img-login'>
                            <img src={LogoImage} alt="Logo da empresa"></img>
                        </div>
                            <RegisterForm/>
                    </div>
                </div>
            </Container>
        </Fragment>
)

export default RegisterScreen