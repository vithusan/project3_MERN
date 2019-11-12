import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ItemPage extends Component {
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
                            <h1>{item.name}</h1>
                            <h1>{item.description}</h1>
                            <h1>{item.price}</h1>
                            <a href={item.buyLink}>Buy</a>
                            {/* <Link to={item.buyLink}>Buy</Link> */}
                            <img src={item.imgUrl} alt="item" />

                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ItemPage;