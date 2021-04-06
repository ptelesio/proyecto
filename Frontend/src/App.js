import React from 'react';
import store from './store/store';
import homeLayout from './containers/homeLayout/homeLayout';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" component={homeLayout} />
          </Switch>
        </HashRouter>
    </Provider>
  );
}

export default App;
