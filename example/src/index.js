import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'rxjs-react-store/lib/provider';
import connect from 'rxjs-react-store/lib/connect';
import {createReducer, combineReducers, applyMiddleware} from 'rxjs-store';
import {Button} from 'react-bootstrap';
import createLogger from 'rxjs-store-logger';

const CounterActions = {
  increment: () => count => count + 1,
  decrement: () => count => count - 1
};

const counterStore = createReducer(CounterActions, 0);
const store = combineReducers({count: counterStore.store});
const decoratedStore = applyMiddleware(createLogger())(store);
const actions = {count: counterStore.actions};

class App extends React.Component {
  render () {
    return (
      <Provider store={decoratedStore} actions={actions}>
        <CounterContainer />
      </Provider>
    );
  }
}

class Counter extends React.Component {
  render () {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <Button onClick={() => this.props.increment()}>+</Button>
        <Button onClick={() => this.props.decrement()}>-</Button>
      </div>
    )
  }
}

const selector = state => ({
  count: state.count
});

const componentActions = storeActions => ({
  increment: storeActions.count.increment,
  decrement: storeActions.count.decrement
});

const CounterContainer = connect(selector, componentActions)(Counter);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
