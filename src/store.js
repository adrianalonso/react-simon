import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from "./reducers";

export default function (initialState) {

    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(reducers, initialState);

    return store
};
