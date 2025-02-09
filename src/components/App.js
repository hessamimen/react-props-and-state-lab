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

  
  onChangeType = ({target: {value}})=>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }
  
  fetchPet = ()=>{
    let url = '/api/pets'

    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({pets: pets}));
  }

  onAdoptPet = (petId)=>{
    this.setState({
      pets: (this.state.pets.map(pet => {
        if(pet.id === petId){
          return {...pet, isAdopted: true}
        }
        return pet;
      }))
    })
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
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPet}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
               />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
