import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   , document.getElementById('root')
// );