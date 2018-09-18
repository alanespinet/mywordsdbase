import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import store from './redux/store/store';
import App, { history } from './components/App';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles/styles.scss';

const jsx = (
  <Provider store={store}>
    <div>
      <Header />
      <Router history={history}>
        <Route to="/" component={App} exact={true} />
      </Router>
      <Footer />
    </div>
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );
