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
        typeList: []
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

    deleteType = async (typeId) => {
        await axios.delete(`/api/type/${typeId}`)
        await this.refreshPage()
    }



    render() {

        return (
            <div>
                {this.state.typeList.map((type, index) => {
                    return (
                        <div>
                            <Link to={`/type/${type._id}`}>{type.name}</Link>
                            <button onClick={() => this.deleteType(type._id)}>Delete</button>
                        </div>
                    )
                })}
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