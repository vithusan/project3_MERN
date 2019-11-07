import React, { Component } from 'react';
import axios from 'axios'

class Type extends Component {

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
                {this.state.typeList.map((type) => {
                    return (
                        <div>
                            <h1>{type.name}</h1>
                            <h2>{type.description}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Type;