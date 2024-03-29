import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './app'


const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container);
root.render(<App />);