import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/type'>Admin</Link>
                <h1>Home page</h1>
            </div>
        );
    }
}

export default Home; 