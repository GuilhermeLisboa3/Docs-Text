import React,{Fragment} from 'react'
import Container from 'react-bootstrap/Container';
import LogoImage from '../../../assets/images/logo-transparente.png'
import '../../../styles/auth.scss'
import LoginForm from '../../../components/auth/login_form';



const LoginScreen = ()=>{
    return(
    <Fragment>
         <Container>
                <div className="center">
                    <div className='container-login'>
                        <div className='img-login'>
                            <img src={LogoImage} alt="Logo da empresa"></img>
                        </div>
                        <LoginForm/>
                    </div>
                </div>
            </Container>
    </Fragment>
    )
}
export default LoginScreen