import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import store from './redux/store/store';
import App, { history } from './components/App';
import AddPage from './components/AddPage';
import EditPage from './components/EditPage';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles/styles.scss';

const jsx = (
  <Provider store={store}>
    <div>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/add" component={AddPage} />
          <Route path="/edit" component={EditPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );
