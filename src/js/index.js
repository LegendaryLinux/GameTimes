import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';
import Landing from './Landing/components/Landing';

const App = () => (
  <Landing />
);

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
