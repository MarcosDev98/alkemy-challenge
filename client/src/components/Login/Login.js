import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm.js';
import { createUser, loginUser } from '../../services/user.js';
import { useAuth } from '../../hooks/useAuth.js';
import { Input } from '../';

import './style.css';

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
    <div className='body'>
      <div className='container' id='container' >
        <div className='forms'>
          <div className='form-container'>
            <div id='login-form'>
              <form className='form' onSubmit={handleLogin}>
                <span className='title'>Login</span>
                <div className='input-field'>
                  <Input className='input' label='Usuario' name='username' value={loginForm.username} onChange={loginHandler} />
                </div>
                <div className='input-field'>
                  <Input id='pwField1' label='Contraseña' type='password' name='password' value={loginForm.password} onChange={loginHandler} className='password input' />
                  <i onClick={showHidePassword} name='showHidePw' className="uil uil-eye-slash right-icon"></i>
                </div>
                <button className='block-button'>Ingresar</button>
                <div className='login-signup'>
                  <span>No estas registrado?</span>
                  <a onClick={showRegistrationForm} href='#'>Registrarse</a>
                </div>
              </form>
            </div>

            <div id='registration-form' style={{display: 'none'}}>
              <form onSubmit={handleSignUp}>
                <span>Registro</span>
                <div className='input-field'>
                  <Input label='Nombre' name='firstname' value={signUpForm.firstname} onChange={signUpHandler} className='input' />
                </div>
                <div className='input-field'>
                  <Input label='Apellido' name='lastname' value={signUpForm.lastname} onChange={signUpHandler} className='input' />
                </div>
                <div className='input-field'>
                  <Input label='Email' name='email' value={signUpForm.email} onChange={signUpHandler} className='input' />
                </div>
                <div className='input-field'>
                  <Input label='Usuario' name='username' value={signUpForm.username} onChange={signUpHandler} className='input' />
                </div>
                <div className='input-field'>
                  <Input label='Contraseña' name='password' value={signUpForm.password} onChange={signUpHandler} type='password' className='password input' />
                  <i onClick={showHidePassword} name='showHidePw' className="uil uil-eye-slash right-icon" />
                </div>
                <button className='block-button'>Registrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;