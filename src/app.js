import React from 'react';
import ReactDOM from 'react-dom';

import { Navigation } from './components/navigation/Navigation'

const Time = () => <time>{new Date().toLocaleString()}</time>;
const header = (
    <header>
        <h1>Hello <Time /> </h1>
        <Navigation />
    </header>
);

ReactDOM.render(header, document.getElementById('app'));
