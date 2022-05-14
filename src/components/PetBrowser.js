import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const passedPet = this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })
    return <div className="ui cards"> {passedPet} </div>
  }
}

export default PetBrowser
