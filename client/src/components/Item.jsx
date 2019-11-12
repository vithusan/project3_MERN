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
        const getAllItem = await axios.get(`/api/item/brand/${this.props.match.params.brandId}`)
        this.setState({ itemList: getAllItem.data })
    }
    render() {
        return (
            <div>
                <div>

                    {this.state.itemList.map((item) => {
                        return (
                            <div key={item._id}>
                                <h1>testing item page</h1>
                                <h1>{item.name}</h1>
                                <h2>{item.description}</h2>
                            </div>
                        )
                    })}

                </div>
                <div>
                    <form>

                    </form>
                </div>
            </div>
        );
    }
}

export default Item;