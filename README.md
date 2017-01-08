# rxjs-store-logger

Logging middleware for [rxjs-store](https://github.com/ajwhite/rxjs-store).

![rxjs-store-logger example](https://cloud.githubusercontent.com/assets/656630/21747765/af2cbe76-d540-11e6-84c6-acbfe862f017.gif)

```
npm install redux-store-logger --save
```

## Example Usage

```js
import {createReducer, combineReducers, applyMiddleware} from 'rxjs-store';
import createLogger from 'rxjs-store-logger';
...

const store = combineReducers({...});
const actions = {...};

const decoratedStore = applyMiddleware(createLogger())(store);

class App extends React.Component {
  render () {
    return (
      <Provider store={decoratedStore} actions={actions}>
        ...
      </Provider>
    );
  }
}
```
