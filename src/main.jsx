import React from 'react'; // ✅ Required for JSX to compile properly
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <App />
);
