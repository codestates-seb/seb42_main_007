import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// /* eslint-disable no-undef */
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './css/index.css';
// import App from './App';
// import { CookiesProvider } from 'react-cookie';
// import { Provider } from 'react-redux';
// import store from './Redux/store';
// import axios from 'axios';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// root.render(
//   <React.StrictMode>
//     <CookiesProvider>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </CookiesProvider>
//   </React.StrictMode>
// );
