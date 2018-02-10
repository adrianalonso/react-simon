import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from "./reducers";

export default function (initialState) {


    const store = createStore(reducers, composeWithDevTools(
        applyMiddleware(thunk),
    ));

    return store
};
