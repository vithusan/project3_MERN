import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Type extends Component {

    state = {
        type: {
            name: '',
            description: '',
            imgUrl: ''
        },
        typeList: [],
        updateForm: false,
        createForm: false
    }

    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const res = await axios.get('/api/type')
        console.log('all Types', res.data)
        this.setState({ typeList: res.data })
    }

    createNewType = async () => {
        const newType = {
            name: this.state.type.name,
            description: this.state.type.description,
            imgUrl: this.state.type.imgUrl
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

    // updateHandle = (event) => {
    //     event.preventDefault()
    //     const prevState = { ...this.state.type }
    //     prevState[event.target.name] = event.target.value
    //     this.setState({ type: prevState })
    // }

    deleteType = async (typeId) => {
        await axios.delete(`/api/type/${typeId}`)
        await this.refreshPage()
    }

    toggleUpdateForm = () => {
        this.setState({ updateForm: !this.state.updateForm })
    }

    toggleCreateForm = () => {
        this.setState({ createForm: !this.state.createForm })
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


    render() {

        return (
            <div className="mainContainer">
                <div>
                    {/* <Link to='/'>Logout</Link> */}
                    {this.state.typeList.map((type) => {
                        return (
                            <div key={type._id} className="typeData">

                                <Link to={`/type/${type._id}`} className="typeName">{type.name}</Link>
                                <button onClick={() => this.deleteType(type._id)} className="linkBtn">Delete</button>

                                {/* <div>
                                    {this.state.updateForm ?
                                        <form onSubmit={() => this.updateType(type._id)}>
                                            <input type="text" name="name" placeholder="name" onChange={this.updateHandle} value={type.name} />
                                            <input type="text" name="description" placeholder="description" onChange={this.updateHandle} value={type.description} />
                                            <input type="text" name="imgUrl" placeholder="ImgUrl" onChange={this.updateHandle} value={type.imgUrl} />
                                            <button type="submit" className="linkBtn">Update</button>
                                        </form>
                                        :
                                        null
                                    }
                                </div> */}

                            </div>
                        )
                    })}
                </div>
                {/* <button onClick={this.toggleUpdateForm} className="linkBtn">Edit</button> */}
                <button onClick={this.toggleCreateForm} className="createBtn">{this.state.createForm ? "-" : "+"}</button>
                {this.state.createForm ?
                    <div>
                        <form onSubmit={() => this.createNewType()} id="createForm">
                            <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.type.name} />
                            <input type="text" name="imgUrl" placeholder="ImgUrl" onChange={this.handleChange} value={this.state.type.imgUrl} />
                            <textarea name="description" placeholder="Description" onChange={this.handleChange} value={this.state.type.description}></textarea>
                            <button type="submit" className="linkBtn2" >Create</button>
                        </form>
                    </div>
                    :
                    null}

            </div>
        );
    }
}

export default Type;