import React, { Component } from 'react'
class App extends Component {
    state = {
        astronauts: []
    }
    render() {
        return (<div>
            {this.state.astronauts.map((person, id) => <h3 key={id}>{person.name}</h3>)}
        </div>)
    }
    componentDidMount() {
        fetch(`http://api.open-notify.org/astros.json`)
          .then(response => response.json)
          .then(({people}) => this.setState({astronauts: people}))
    }
}
export default App