import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

let middleware = applyMiddleware(thunk);

middleware = composeWithDevTools(middleware);

const store = createStore(rootReducer, middleware);

export { store };
