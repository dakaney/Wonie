import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Homepage from './components/Homepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <div>
        <h1> Wonie </h1>
        <Homepage />
        </div>
      </Provider>
    );
  }

}

export default App;