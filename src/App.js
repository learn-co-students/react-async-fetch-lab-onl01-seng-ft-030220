// create your App component here
import React, { Component } from 'react';
import fetch from 'node-fetch';

class App extends Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <h1>App Component</h1>
            </div>
        );
    }
}

export default App;