import React, { Component } from 'react'
import axios from 'axios'
import BeerItems from '../components/BeerItems';
class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    // immer wenn ich api oder backend  data anrufen möchte
    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((response) => {
                this.setState({ data: response.data });
            })

            //wenn error fiden im console lod zeigen
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <div className="beers">
                {this.state.data.map((element, index) => (
                    <BeerItems
                        key={index}
                        name={element.name}
                        img={element.image_url}
                        tagline={element.tagline}
                        contributed_by={element.contributed_by}

                        id={element._id}
                    />
                ))}
            </div>
        );
    }
}

export default Beers;