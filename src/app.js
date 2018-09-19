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

import { startSetWords } from './redux/actions';

import './styles/styles.scss';
let hasRenderData = false;

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

const loadingJSX = (
  <div className="loading-page">
    <div className="loading-page__wrapper">
      <h1>Words DBase</h1>
      <img src="/images/loading.gif" alt="" />
      <p>Loading data... please wait</p>
    </div>
  </div>
);

ReactDOM.render( loadingJSX, document.getElementById('app') );

if( !hasRenderData ){
  store.dispatch( startSetWords() )
    .then( () => {
      hasRenderData = true;
      ReactDOM.render( jsx, document.getElementById('app') );
    } );
}
