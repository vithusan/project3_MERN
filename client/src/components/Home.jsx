import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class Home extends Component {
    state = {
        typeList: []
    }
    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllType = await axios.get('/api/type')
        this.setState({ typeList: getAllType.data })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.typeList.map((type) => {
                        return (
                            <div key={type._id}>
                                <Link to={`/brandpage/${type._id}`}><img src={type.imgUrl} alt="type of drones" /></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home; 