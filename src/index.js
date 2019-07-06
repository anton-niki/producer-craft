import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/videojs-custom-skin.css';
import App from './components';
import * as serviceWorker from './hocs/serviceWorker';

// enables hot module reloading
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
