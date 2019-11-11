import React, { Component } from 'react';

class UpdateType extends Component {
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
                <form onSubmit={() => this.updateType(type._id)}>
                    <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.type.name} />
                    <input type="text" name="description" placeholder="description" onChange={this.handleChange} value={this.state.type.description} />
                    <input type="text" name="imgUrl" placeholder="ImgUrl" onChange={this.handleChange} value={this.state.type.imgUrl} />
                    <button type="submit" >Update</button>
                </form>
            </div>
        );
    }
}

export default UpdateType;