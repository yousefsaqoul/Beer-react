import React, { Component } from 'react'
import axios from 'axios'



class BeerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }


    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com${window.location.pathname}`)
            .then((response) => {
                this.setState({ item: response.data });

            })


            .catch((error) => console.log(error))
    }


    render() {
        return (
            <div className="beerDetails">
                <img src={this.state.item.image_url} />
                <h1>{this.state.item.name}</h1>
                <h2>{this.state.item.attenuation_level}</h2>
                <h3>{this.state.item.tagline}</h3>
                <h3>{this.state.item.first_brewed}</h3>
                <p>{this.state.item.description}</p>
            </div>
        );
    }
}

export default BeerDetails;