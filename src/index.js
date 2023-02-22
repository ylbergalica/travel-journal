import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
import './style.css';

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <h1>Hello World!</h1>
	<App/>
)