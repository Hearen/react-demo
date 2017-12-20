import { render } from 'react-dom';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './app.css';
import './index.html';

render(<App message="this is it!" />, document.getElementById('app'));

