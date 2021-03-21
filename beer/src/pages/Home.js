import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import imgBar from '../images/photo-1514933651103-005eec06c04b.jpeg'


class Home extends Component {



    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Link to='/beers'>
                <div className='containerImgHomePage'>
                    <img src={imgBar} alt="Bar" className='imgHomePage' />
                </div>
            </Link>


        );
    }
}

export default Home;