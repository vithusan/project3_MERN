import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Brand extends Component {

    state = {
        brand: {
            name: '',
            description: '',
            imgUrl: '',
            typeId: this.props.match.params.typeId
        },
        brandList: [],
        createForm: false

    }

    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllBrand = await axios.get(`/api/brand/type/${this.props.match.params.typeId}`)
        this.setState({ brandList: getAllBrand.data })
    }

    createNewBrand = async () => {
        const newBrand = {
            name: this.state.brand.name,
            description: this.state.brand.description,
            imgUrl: this.state.brand.imgUrl,
            typeId: this.state.brand.typeId
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

    // updateType = (typeId) => {
    //     // event.preventDefault()
    //     axios.put(`/api/type/${typeId}`, {
    //         name: this.state.type.name,
    //         descript: this.state.type.description,
    //         imgUrl: this.state.type.imgUrl
    //     })
    //         .then((res) => {
    //             this.setState({ type: res.data, updateForm: false })
    //         })
    // }
    toggleCreateForm = () => {
        this.setState({ createForm: !this.state.createForm })
    }

    render() {
        return (
            <div className="mainContainer">

                <Link to='/type' className="linkBtn2">Back</Link>

                {this.state.brandList.map((brand) => {
                    return (
                        <div key={brand._id} className="typeData">
                            <Link to={`/brand/${brand._id}`} className="typeName">{brand.name}</Link>
                            {/* <img src={brand.imgUrl} alt="type of drones" /> */}
                            <button onClick={() => this.deleteBrand(brand._id)} className="linkBtn">Delete</button>
                        </div>
                    )
                })}
                {/* why does the input need values  */}
                <button onClick={this.toggleCreateForm} className="createBtn">{this.state.createForm ? "-" : "+"}</button>
                {this.state.createForm ?
                    <div>
                        <form onSubmit={() => this.createNewBrand()}>
                            <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.brand.name} />
                            <input type="text" name="imgUrl" placeholder="imgUrl" onChange={this.handleChange} value={this.state.brand.imgUrl} />
                            {/* <input type="textarea" name="description" placeholder="description" onChange={this.handleChange} value={this.state.brand.description} /> */}
                            <textarea name="description" placeholder="description" onChange={this.handleChange} value={this.state.brand.description}></textarea>
                            {/* <input type="text" name="typeId" value={this.props.match.params.typeId} /> */}
                            <button type="submit" className="linkBtn2">Create</button>
                        </form>
                    </div>
                    :
                    null}

            </div>
        );
    }
}
export default Brand;