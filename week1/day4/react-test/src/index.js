import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function Hello() {
//   return(
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
