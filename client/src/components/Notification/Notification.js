import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { BodyComponent, Toast, ToastContent, CheckIcon, Message, Title, Text, CloseIcon} from './styles';


// eslint-disable-next-line no-unused-vars
const Notification = ({ mode, title, message, onClose }) => {



  const toast = document.getElementById('toast');
  
  const hideNotification = () => {

    if (toast !== null) {

      toast.style.transform = 'translateX(calc(100% + 35px))';
    }
    
  };

  useEffect(() => {
    setTimeout(() => {
      hideNotification();
    }, 3000);
  }, []);

  return(
    <Toast id='toast' mode={mode}>
      <ToastContent>
        <CheckIcon mode={mode} className='uil uil-check' />
        <Message>
          <Title>{title}</Title>
          <Text>{message}</Text>
        </Message>
      </ToastContent>
      <CloseIcon onClick={hideNotification} className='uil uil-times' />
    </Toast>
  );
};

export default Notification;