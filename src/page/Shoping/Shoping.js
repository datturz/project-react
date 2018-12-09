import React, { Component } from 'react'
import './Shoping.css'
export default class Shoping extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container section">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page"> <a href="category.html">Category </a> </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div >
                <div className="container section1">
                    <div className="row">
                        <div className="col-12 col-sm-3">
                            <div className="card bg-light mb-3">
                                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-list"></i> Categories</div>
                                <ul className="list-group category_block">
                                    <li className="list-group-item"><a href="category.html">Wak Doyok</a></li>
                                    <li className="list-group-item"><a href="category.html">Beard</a></li>
                                    <li className="list-group-item"><a href="category.html">Folti Baffi</a></li>
                                    <li className="list-group-item"><a href="category.html">Real Man</a></li>
                                    <li className="list-group-item"><a href="category.html">Vestibulum at eros</a></li>
                                </ul>
                            </div>
                            <div className="card bg-light mb-3">
                                <div className="card-header bg-success text-white text-uppercase">Last product</div>
                                <div className="card-body">
                                    <img className="img-fluid" src="https://obatpenumbuhjenggotpalingampuh.files.wordpress.com/2017/08/folti-24.png?w=300&h=300" alt='tes' />
                                    <h5 className="card-title">Folti Baffi</h5>
                                    <p className="card-text">Obat jerman</p>
                                    <p className="bloc_left_price"><i className="fas fa-dollar-sign"></i> 99.00 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img className="card-img-top" src="https://obatpenumbuhjenggotpalingampuh.files.wordpress.com/2017/08/folti-24.png?w=300&h=300" alt="Card " />
                                        <div className="card-body">
                                            <h4 className="card-title"><a href="product.html" title="View Product">Wak Doyok</a></h4>
                                            <p className="card-text">Wak Doyok Dari Malaysia</p>
                                            <div className="row">
                                                <div className="col">
                                                    <a href="shoping-detail.html" className="btn btn-danger btn-block"><i className="fas fa-dollar-sign"></i> 99.00 </a>
                                                    <br />
                                                </div>
                                                <div className="col">
                                                    <a href="/" className="btn btn-success btn-block"><i className="fas fa-cart-arrow-down"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="/" tabindex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                                            <li className="page-item active">
                                                <a className="page-link" href="/">2 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="/">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}