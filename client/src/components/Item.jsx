import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Item extends Component {

    state = {
        item: {
            name: '',
            description: '',
            price: '',
            imgUrl: '',
            buyLink: '',
            brandId: this.props.match.params.brandId
        },
        itemList: []
    }

    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllItem = await axios.get(`/api/item/brand/${this.props.match.params.brandId}`)
        this.setState({ itemList: getAllItem.data })
    }

    handleChange = (event) => {
        event.preventDefault()
        const prevState = { ...this.state.item }
        prevState[event.target.name] = event.target.value
        this.setState({ item: prevState })
    }

    createNewItem = async () => {
        const newState = {
            name: this.state.item.name,
            description: this.state.item.description,
            price: this.state.item.price,
            imgUrl: this.state.item.imgUrl,
            buyLink: this.state.item.buyLink,
            brandId: this.state.item.brandId
        }
        await axios.post('/api/item', newState)
        await this.refreshPage()
    }

    deleteItem = async (itemId) => {
        await axios.delete(`/api/item/${itemId}`)
        await this.refreshPage()
    }

    render() {
        return (
            <div>
                <div>

                    {this.state.itemList.map((item) => {
                        return (
                            <div key={item._id}>
                                <h1>{item.name}</h1>
                                <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                            </div>
                        )
                    })}

                </div>
                <div>
                    <form onSubmit={() => this.createNewItem()}>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.item.name} />
                        <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.item.description} />
                        <input type="text" name="price" placeholder="Price" onChange={this.handleChange} value={this.state.item.price} />
                        <input type="text" name="imgUrl" placeholder="Img Url" onChange={this.handleChange} value={this.state.item.imgUrl} />
                        <input type="text" name="buyLink" placeholder="Product Link" onChange={this.handleChange} value={this.state.item.buyLink} />
                        <input type="submit" value="Create" />
                    </form>
                </div>
                <Link to={`/type/${this.props.match.params.typeId}`}>Back</Link>
            </div>
        );
    }
}

export default Item;