import React, { Component } from 'react';
import Slider from "react-slick";

class ProductImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    renderSliderMainImages = (product) => {
        return product.map(({ id, image }) => {
            return (
                <div key={id}>
                    <div className="item">
                        <img src={"https://anydatapoint.net/" + product[0].adpCustomersDTO.uuid + "/products/400x400/" + product[0].productImagesDTO[0].name + "-400x400." + product[0].productImagesDTO[0].extension} alt="image" />
                    </div>
                </div>
            )
        })
    }

    renderSliderSubImages = (product) => {
        return product.map(({ id, image }) => {
            return (
                <div key={id}>
                    <div className="item">
                        <img src={"https://anydatapoint.net/" + product[0].adpCustomersDTO.uuid + "/products/400x400/" + product[0].productImagesDTO[0].name + "-400x400." + product[0].productImagesDTO[0].extension} alt="image" />
                    </div>
                </div>
            )
        })
    }

    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-6 col-md-6">
                <div className="products-page-gallery">
                    <div className="product-page-gallery-main">
                        <div>
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                            >
                                {
                                    this.renderSliderMainImages(product)
                                }
                            </Slider>
                        </div>
                    </div>

                    <div className="product-page-gallery-preview">
                        <div>
                            <Slider
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={5}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                arrows={false}
                                dots={false}
                            >
                                {
                                    this.renderSliderSubImages(product)
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const DEFAULT_PROPS = [
    {
        id: 1,
        image: require('../../images/product-details/1.jpg')
    },
    {
        id: 2,
        image: require('../../images/product-details/2.jpg')
    },
    {
        id: 3,
        image: require('../../images/product-details/3.jpg')
    },
    {
        id: 4,
        image: require('../../images/product-details/4.jpg')
    },
    {
        id: 5,
        image: require('../../images/product-details/5.jpg')
    },
    {
        id: 6,
        image: require('../../images/product-details/6.jpg')
    },
    {
        id: 7,
        image: require('../../images/product-details/7.jpg')
    }
];

export default ProductImage;
