import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import './style.css';

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
    <div className='toast' id='toast' mode={mode}>
      <div className='toast-content'>
        <i mode={mode} className='uil uil-check check-icon' />
        <div className='message'>
          <div className='title'>{title}</div>
          <div className='text'>{message}</div>
        </div>
      </div>
      <i onClick={hideNotification} className='uil uil-times close-icon' />
    </div>
  );
};

export default Notification;