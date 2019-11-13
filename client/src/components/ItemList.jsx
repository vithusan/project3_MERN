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
            <div className="brandContainer">
                {this.state.itemList.map((item) => {
                    return (
                        <div key={item._id} >
                            {/* <Link to={`/itempage/${this.props.match.params.brandId}`} className="itemLink">
                                <img src={item.imgUrl} alt="drone brands" className="itemImgLink" />
                                <h2>{item.name}</h2>
                                <h5>{item.price}</h5>
                            </Link> */}
                            <a href={item.buyLink} className="itemLink">
                                <img src={item.imgUrl} alt="drone brands" className="itemImgLink" />
                                <h2>{item.name}</h2>
                                <h5>{item.price}</h5>
                            </a>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ItemList;