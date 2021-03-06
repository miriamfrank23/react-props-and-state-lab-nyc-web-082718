import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  mapPets = () => {
    console.log(this.props);
    return this.props.pets.map(pet => {
      return <Pet key={pet.id}
      pet={pet}
      onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">{this.mapPets()}</div>
  }
}

export default PetBrowser
