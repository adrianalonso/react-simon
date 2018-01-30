import React, {Component} from 'react';
import Game from "./containers/Game"
import Scores from "./containers/Scores"
import * as Colors from "./config/colors"
import {Provider} from 'react-redux';
import configureStore from './store.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <Router>
                    <div className="simon">
                        <Route exact path="/" component={Game}/>
                        <Route path="/scores" component={Scores}/>
                    </div>
                </Router>

            </Provider>
        );
    }
}

export default App;
