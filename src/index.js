import React from 'react';
import ReactDOM from 'react-dom/client';
// import name, { secondName } from './My'
import HelloReact from './My'

const root = ReactDOM.createRoot(document.querySelector('#wrapper'));

const name = 'Radhika'

// const names = ['Radhika', 'Chetan', 'Ridhi']

// { } - experssion

root.render(
  // <h1>Hello {names} </h1> //JSX

  <HelloReact name = {name} />


);