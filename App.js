import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

import AppInit from './src/components/AppInit';

class App extends Component {



  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppInit />
      </Provider>
    )
  }
}

export default App;