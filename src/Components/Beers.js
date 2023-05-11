import React, { Component } from 'react'
import Beer from './Beer';

class Beers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        };
    }

    componentDidMount() { 
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => {
                return res.json();
        })
        .then((data => {
            const updatedData = data.map((beer) => {
                const updatedBeer = {
                    ...beer,
                    isliked: false
                };

                return updatedBeer;
            });

            this.setState({
                beers: updatedData
            });
        }));
     }

     componentDidUpdate() {
         console.log(this.state.beers)
        } 
    
  render() {
    return (
      <div>
        Beers
        <ul>
            {this.state.beers.map((beer, index) => {
                const {image_url, name, tagline } = beer
                return (
                    <Beer name={name} image={image_url} message={tagline}/>
                );
  })}
        </ul>
        </div>
    )
  }
}

export default Beers
