import React from 'react';
import { Link } from 'react-router-dom';

const BeerItems = (props) => {
    const { name, tagline, contributed_by, img, id, } = props

    return (
        <div className="beerItems">
            <Link to={'/beers/' + id}>
                <img src={img} />
            </Link>
            <h1>{name}</h1>
            <h2>{tagline}</h2>
            <h3>{contributed_by}</h3>

        </div>
    );
}

export default BeerItems;