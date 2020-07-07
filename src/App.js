import React, { Component } from 'react';
class App extends Component {
    render() {
        return (
            <div>
                componentDidMount() {
                    fetch('http://api.open-notify.org/astros.json')
                        .then(response => response.json())
                        .then(data => { 
                            this.setState({
                                peopleInSpace: data.people
                            })
                        })
                }  
            </div>
        );
    }
}
export default App;
