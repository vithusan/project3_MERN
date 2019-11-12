import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ItemList extends Component {
    state = {
        itemList: []
    }
    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllItem = await axios.get(`/api/item/brand/${this.props.match.params.brandId}`)
        this.setState({ itemList: getAllItem.data })
    }
    render() {
        return (
            <div>
                {this.state.itemList.map((item) => {
                    return (
                        <div key={item._id}>
                            <Link to={`/itempage/${this.props.match.params.brandId}`}><h1>{item.name}</h1></Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ItemList;