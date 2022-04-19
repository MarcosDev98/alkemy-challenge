import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm.js';
import { createUser, loginUser } from '../../services/user.js';
import { A, Body, Container, LoginSignup, BlockButton, Form, Forms, FormContainer, InputField, Title, StyledInput, RightIcon, Span } from './styles.js';
import { useAuth } from '../../hooks/useAuth.js';



const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginForm, loginHandler, resetLogin] = useForm({
    username: '',
    password: '',
  });

  // eslint-disable-next-line no-unused-vars
  const [signUpForm, signUpHandler, resetSignUp] = useForm({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  });


  const handleLogin = async (e) => {
    e.preventDefault();

    loginUser(loginForm)
      .then((data) => {
        
        login(data);
        navigate('/');
        
      })
      .catch((error) => console.error('login_error', error));
    
    resetLogin();
    
  };

  
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('handle_signup:', signUpForm);
    createUser(signUpForm)
      .then((data) => {
        
        if (data.status === 'OK') {
          showLoginForm();
        }
        

      })
      .catch((error) => console.error('signup_error', error));

    // resetSignUp();

  };


  const showHidePassword = (e) => {
    
    const eye = 'uil uil-eye';
    const eyeSlash = 'uil uil-eye-slash';

    let names = e.target.className.split(' ');
    
    // MOSTRAR PASSWORD

    if (e.target.parentElement.childNodes[0].children[1].type === 'password') {


      e.target.parentElement.childNodes[0].children[1].type = 'text';
      

      // CAMBIAR ICONO
      
      if (names.length > 4) {
        names = names.slice(0,4);
      }

      names[3] = eye;
      e.target.className = names.toString().replaceAll(',', ' ');


    } else {

      // OCULTAR PASSWORD

      e.target.parentElement.childNodes[0].children[1].type = 'password';
      
      // VOLVER A CAMBIAR ICONO

      if (names.length > 4) {

        names = names.slice(0,4);
      }

      names[3] = eyeSlash;
      e.target.className = names.toString().replaceAll(',', ' ');
    }

    // ESTABLECER FOCO EN EL INPUT NUEVAMENTE.

    e.target.parentElement.childNodes[0].children[1].focus();

  };
  

  const showRegistrationForm = (e) => {
    e.preventDefault();

    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';

    const  registrationForm = document.getElementById('registration-form');
    registrationForm.style.display = 'block';

  };

  const showLoginForm = () => {

    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';

    const  registrationForm = document.getElementById('registration-form');
    registrationForm.style.display = 'none';

  };



  return (
    <Body>
      <Container id='container' >
        <Forms>
          <FormContainer>
            <div id='login-form'>
              <Form onSubmit={handleLogin}>
                <Title>Login</Title>
                <InputField>
                  <StyledInput label='Usuario' name='username' value={loginForm.username} onChange={loginHandler} />
                </InputField>
                <InputField>
                  <StyledInput id='pwField1' label='Contraseña' type='password' name='password' value={loginForm.password} onChange={loginHandler} className='password' />
                  <RightIcon onClick={showHidePassword} name='showHidePw' className="uil uil-eye-slash"></RightIcon>
                </InputField>
                <BlockButton>Ingresar</BlockButton>
                <LoginSignup>
                  <Span>No estas registrado?</Span>
                  <A onClick={showRegistrationForm} href='#'>Registrarse</A>
                </LoginSignup>
              </Form>
            </div>

            <div id='registration-form' style={{display: 'none'}}>
              <Form onSubmit={handleSignUp}>
                <Title>Registro</Title>
                <InputField>
                  <StyledInput label='Nombre' name='firstname' value={signUpForm.firstname} onChange={signUpHandler} />
                </InputField>
                <InputField>
                  <StyledInput label='Apellido' name='lastname' value={signUpForm.lastname} onChange={signUpHandler} />
                </InputField>
                <InputField>
                  <StyledInput label='Email' name='email' value={signUpForm.email} onChange={signUpHandler} />
                </InputField>
                <InputField>
                  <StyledInput label='Usuario' name='username' value={signUpForm.username} onChange={signUpHandler} />
                </InputField>
                <InputField>
                  <StyledInput id='pwField2' label='Contraseña' name='password' value={signUpForm.password} onChange={signUpHandler} type='password' className='password' />
                  <RightIcon onClick={showHidePassword} name='showHidePw' className="uil uil-eye-slash "></RightIcon>
                </InputField>
                <BlockButton>Registrar</BlockButton>
              </Form>
            </div>
          </FormContainer>
        </Forms>
      </Container>
    </Body>
  );
};

export default Login;