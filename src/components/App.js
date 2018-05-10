import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';
import Author from './Author';

class App extends Component {

    render() {

        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Gallery}/>
                        <Route exact path="/author/:id" component={Author}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
