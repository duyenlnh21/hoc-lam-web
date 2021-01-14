// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// // hello-jsx
// import React from 'react';
// import { render } from 'react-dom';

// render(
//     <p>
//         Hello, <strong>How are you ? </strong>
//     </p>,
//     document.getElementById('root')
// );

// html-tag-conventions
// import React from 'react';
// import { render } from 'react-dom';

// render(
//   <button title="My Button" foo="bar">
//     Nhấn nút
//   </button>,
//   document.getElementById('root')
// );

// // render(<button />, document.getElementById('root'));

// jsx-fragments

import React from 'react';
import { render } from 'react-dom';

import WithoutFragments from './WithoutFragments';
import WithFragments from './WithFragments';

render(
    <div>
        <WithoutFragments />
        <WithFragments />
    </div>,
    document.getElementById('root')
);
