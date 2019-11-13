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
            <div className="brandContainer">
                {this.state.brandList.map((brand) => {
                    return (
                        <div key={brand._id} >
                            <Link to={`/itemlist/${brand._id}`} className="brandLink">
                                <img src={brand.imgUrl} alt="drone brands" className="brandImgLink" />
                                {/* <div className="brandTitle">{brand.name}</div> */}
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default BrandPage;