import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './Landing.js';
import Education from './Education.js'
import { NextUIProvider } from '@nextui-org/react';
import Projects from './Projects'

ReactDOM.render(
  <NextUIProvider>
      <Landing />
      {/* <Projects/> */}
   </NextUIProvider>,
  document.getElementById('root')
);

