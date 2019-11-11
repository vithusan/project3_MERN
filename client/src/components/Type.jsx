import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Brand from './Brand.jsx'
import Item from './Item.jsx'

class Type extends Component {

    state = {
        type: {
            name: '',
            description: '',
            imgUrl: ''
        },
        typeList: [],
        updateForm: false
    }

    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllType = await axios.get('/api/type')
        this.setState({ typeList: getAllType.data })
    }

    createNewType = async () => {
        const newType = {
            name: this.state.type.name,
            description: this.state.type.description
        }

        await axios.post('/api/type', newType)
        this.refreshPage()
    }
    handleChange = (event) => {
        event.preventDefault()
        const prevState = { ...this.state.type }
        prevState[event.target.name] = event.target.value
        this.setState({ type: prevState })
    }

    updateHandle = (event) => {
        event.preventDefault()
        const prevState = { ...this.state.type }
        prevState[event.target.name] = event.target.value
        this.setState({ type: prevState })
    }

    deleteType = async (typeId) => {
        await axios.delete(`/api/type/${typeId}`)
        await this.refreshPage()
    }

    toggleUpdateForm = () => {
        this.setState({ updateForm: !this.state.updateForm })
    }

    updateType = (typeId) => {
        // event.preventDefault()
        axios.put(`/api/type/${typeId}`, {
            name: this.state.type.name,
            descript: this.state.type.description,
            imgUrl: this.state.type.imgUrl
        })
            .then((res) => {
                this.setState({ type: res.data, updateForm: false })
            })
    }


    render() {

        return (
            <div>
                <div>
                    {this.state.typeList.map((type) => {
                        return (
                            <div key={type._id}>
                                <Link to={`/type/${type._id}`}>{type.name}</Link>
                                <button onClick={() => this.deleteType(type._id)}>Delete</button>
                                <div>
                                    {this.state.updateForm ?
                                        <form onSubmit={() => this.updateType(type._id)}>
                                            <input type="text" name="name" placeholder="name" onChange={this.updateHandle} value={type.name} />
                                            <input type="text" name="description" placeholder="description" onChange={this.updateHandle} value={type.description} />
                                            <input type="text" name="imgUrl" placeholder="ImgUrl" onChange={this.updateHandle} value={type.imgUrl} />
                                            <button type="submit" >Update</button>
                                        </form>
                                        :
                                        null
                                    }
                                </div>

                            </div>
                        )
                    })}
                </div>
                <button onClick={this.toggleUpdateForm}>Edit</button>
                <form onSubmit={() => this.createNewType()}>
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.type.name} />
                    <input type="text" name="description" placeholder="description" onChange={this.handleChange} value={this.state.type.description} />
                    <input type="text" name="imgUrl" placeholder="ImgUrl" onChange={this.handleChange} value={this.state.type.imgUrl} />
                    <button type="submit" >Create</button>
                </form>
            </div>
        );
    }
}

export default Type;