import React, { Component } from 'react';
import axios from 'axios'

class Item extends Component {

    state = {
        itemList: []
    }

    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllItem = await axios.get('/api/item')
        this.setState({ itemList: getAllItem.data })
    }
    render() {
        return (
            <div>
                {this.state.itemList.map((item) => {
                    return (
                        <div>
                            <h1>{item.name}</h1>
                            <h2>{item.description}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Item;