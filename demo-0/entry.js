import { render  } from 'react-dom';
import React from 'react';

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

render(<App message="this is it!"/>, document.getElementById('app'));

document.write("Hello");
