import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm.js';
import { createUser, loginUser } from '../../services/user.js';
import { A, LoginSignup, BlockButton, Form, Forms, FormContainer, InputField, Title, StyledInput, RightIcon, Span } from './styles.js';



const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loginForm, loginHandler] = useForm({
    username: '',
    password: '',
  });

  const [signUpForm, signUpHandler] = useForm({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  });


  const handleLogin = (e) => {
    e.preventDefault();

    loginUser(loginForm)
      .then((data) => {
        setUser(data);
      }).catch((error) => console.error('login_error', error));

  };

  const handleSignUp = (e) => {

    e.preventDefault();
    createUser(signUpForm)
      .then((data) => {
        if (data.status === 'OK') {
          showLoginForm();
        }
      })
      .catch((error) => console.error('signup_error', error));

  };

  if (user) {
    window.sessionStorage.setItem('loggedUser', JSON.stringify(user));
    navigate('/');
  }


  const showRegistrationForm = (e) => {
    e.preventDefault();

    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';

    const registrationForm = document.getElementById('registration-form');
    registrationForm.style.display = 'block';

  };

  const showLoginForm = (e) => {
    e.preventDefault();

    const registrationForm = document.getElementById('registration-form');
    registrationForm.style.display = 'none';

    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';

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


  return (
    <Forms>
      <FormContainer>
        <div id='login-form'>
          <Form onSubmit={handleLogin}>
            <Title>Login</Title>
            <InputField>
              <StyledInput label='Usuario' name='username' value={loginForm.username} onChange={loginHandler} />
            </InputField>
            <InputField>
              <StyledInput label='Contraseña' name='password' value={loginForm.password} onChange={loginHandler} />
              <RightIcon onClick={showHidePassword} className="uil uil-eye-slash" />
            </InputField>
            <BlockButton>Ingresar</BlockButton>
            <LoginSignup>
              <Span>No estas registrado?</Span>
              <A onClick={showRegistrationForm} href='#'>Registrarse</A>
            </LoginSignup>
          </Form>
        </div>
        <div id='registration-form'>
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
              <StyledInput label='Contraseña' name='password' value={signUpForm.password} onChange={signUpHandler} />
              <RightIcon onClick={showHidePassword} name='showHidePw' className="uil uil-eye-slash " />
            </InputField>
            <BlockButton>Registrar</BlockButton>
          </Form>
        </div>
      </FormContainer>
    </Forms>
  );
};

export default Login;