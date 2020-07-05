// create your App component here
import React, { Component } from 'react'

class App extends Component {
  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        astronauts: json.people
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.astronauts.map(astronaut => {
          return <span>{astronaut.craft} - {astronaut.name}</span>
        })}
      </div>
    )
  }
}

export default App