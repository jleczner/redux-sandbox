import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import rootReducer from '../app/reducers';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, loggerMiddleware)
    ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../app/reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}