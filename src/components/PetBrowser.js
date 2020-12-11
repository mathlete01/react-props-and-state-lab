import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    //console.log(this.props.petsData)
    let data = this.props.petsData
    return <div className="ui cards">
      {data.map(pet => <Pet data={pet}/>)}
      </div>
  }
}

export default PetBrowser
