import React, {Component} from 'react';
import Game from "./containers/Game"
import * as Colors from "./config/colors"
import {Provider} from 'react-redux';
import configureStore from './store.js';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="simon">
                    <Game/>
                </div>
            </Provider>
        );
    }
}

export default App;
