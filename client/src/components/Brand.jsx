import React, { Component } from 'react';
import axios from 'axios'

class Brand extends Component {

    state = {
        brand: {
            name: '',
            description: '',
            imgUrl: ''
        },
        brandList: []
    }

    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllBrand = await axios.get('/api/brand')
        await this.setState({ brandList: getAllBrand.data })
    }

    createNewBrand = async () => {
        const newBrand = {
            name: this.state.brand.name,
            description: this.state.brand.description,
            imgUrl: this.state.brand.imgUrl
        }
        await axios.post('/api/brand', newBrand)
        await this.refreshPage()

    }

    handleChange = (event) => {
        event.preventDefault()
        const prevState = { ...this.state.brand }
        prevState[event.target.name] = event.target.value
        this.setState({ brand: prevState })
    }

    deleteBrand = async (brandId) => {
        await axios.delete(`/api/brand/${brandId}`)
        await this.refreshPage()
    }



    render() {
        return (
            <div>
                {this.state.brandList.map((brand, index) => {
                    return (
                        <div>
                            <h1>{brand.name}</h1>
                            <button onClick={() => this.deleteBrand(brand._id)}>Delete</button>
                        </div>
                    )
                })}
                {/* why does the input need values  */}
                <form onSubmit={() => this.createNewBrand()}>
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.brand.name} />
                    <input type="text" name="description" placeholder="description" onChange={this.handleChange} value={this.state.brand.description} />
                    <input type="text" name="imgUrl" placeholder="imgUrl" onChange={this.handleChange} value={this.state.brand.imgUrl} />
                    <button type="submit">Create</button>
                </form>

            </div>
        );
    }
}


export default Brand;