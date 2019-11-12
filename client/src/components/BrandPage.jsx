import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class BrandPage extends Component {
    state = {
        brandList: []
    }
    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllBrand = await axios.get(`/api/brand/type/${this.props.match.params.typeId}`)
        this.setState({ brandList: getAllBrand.data })
    }
    render() {
        return (
            <div>
                {this.state.brandList.map((brand) => {
                    return (
                        <div key={brand._id}>
                            <Link to={`/itemlist/${brand._id}`} className="linkBtn">{brand.name}</Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default BrandPage;