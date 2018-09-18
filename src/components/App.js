import React from 'react';
import createHistory from 'history/createBrowserHistory';

import WordList from './WordList';
import WordDescription from './WordDescription';

export const history = createHistory();


export default class App extends React.Component {
  render(){
    return(
      <div className="app page">
        <div className="container">
          <div className="app__wrapper">
            <WordList />
            <WordDescription />
          </div>
        </div>
      </div>
    )
  }
}
