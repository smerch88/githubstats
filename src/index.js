import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="app-container">
    <ReactNotifications />
    <App />{' '}
  </div>
);
