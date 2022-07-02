import React, {Fragment} from 'react'
import presentationImage from '../../assets/images/presentation.png'
import logoImage from '../../assets/images/logo-transparente.png'
import Container from 'react-bootstrap/Container';
import '../../styles/home.scss'
import {Link} from 'react-router-dom'


const HomeScreen = ()=>{
    return(
        <Fragment>
            <div className="container-body">
              <Link to="/register" className='register-btn'><button>Register</button></Link>
                <Container>
                    <div className="company-photos">
                            <img src={logoImage} alt="Logo da empresa"/>
                            <img src={presentationImage} alt="imagem demostrando o app"/>
                    </div>
                </Container>
                <div className="color-dark">
                    <Container>
                        <div className="description">
                                <div className="description-dados">
                                    <h1>Welcome</h1>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
                                    <Link to="/register">
                                         <a><button><span>Register</span><i></i></button></a>
                                    </Link>
                                </div>
                    
                                <div className='contact'>
                                    <p>DocsText@mysite.com</p>
                                    <p>(11) 9999-88888</p>
                                </div>
                        </div>
                    </Container>
                </div>
            </div>

        </Fragment>
    )
}
export default HomeScreen;