import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  
  handleSelect = (type) => {
    this.setState({
      filters: {
        type: type
    }
  })}
  
  getPets=()=>{
    //console.log(this.state)
    let link
    this.state.filters.type == "all" ?
    link = "/api/pets" :  link = `/api/pets?type=${this.state.filters.type}`
    fetch(link)
      .then(response => response.json())
      .then(data => this.setState({
        pets:data
      }))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleSelect} getPetsData={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petsData = {this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
