import React, { Component } from 'react'
import './Banner.css'
export default class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron  bg-dark ">
                    <div className="container">
                        <div className='row'>
                            <div className='col-lg-6 text-center'>
                                <img src='https://cdn.shopify.com/s/files/1/0114/0994/8731/files/subscribe-product-1_large.png?v=1538980941' alt='alt' />
                            </div>
                            <div className='col-lg-6 text-center' >
                                <p className='lead '>Spesial <span>Offer </span>For Subcription</p>
                                <h4 className="broh">GET INSTANT DISCOUNT FOR MEMBERSHIP</h4>
                                <p className="lead ">Subscribe our newsletter and get all latest news abot our latest
products, promotions, offers and discount</p>
                                <div className="input-group mb-3" >
                                    <input id='bas' type="text" className="form-control" placeholder="Subscibe For More Discount $"  />
                                    <div className="input-group-append">
                                        <button  className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}