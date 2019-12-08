import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import QuickView from '../Modal/QuickView';

class ProductsCard extends Component {
    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null,
        title: '',
        minOrder: 0,
        Unit: 0,
        display: false,
    };
    handleAddToCart = (id) => {
        this.props.addToCart(id);

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image, price, id) => {
        this.setState({
            modalImage: image,
            price: price,
            idd: id,
            title: title,
            minOrder: minOrder,
            Unit: Unit
        });
    }

    render() {
        let { product } = this.props;
        const { modalOpen } = this.state;
        return (
            <React.Fragment>
                <ReactTooltip />
                <ToastContainer transition={Slide} />
                {product.map((data, idx) => (
                    <div className="col-lg-4 col-sm-6 col-md-4 col-6 products-col-item" key={idx}>
                        <div className="single-product-box">
                            <div className="product-image">
                                <a href="#">

                                    <img src={"https://anydatapoint.net/" + data.adpCustomersDTO.uuid + "/products/400x400/" + data.productImagesDTO[0].name + "-400x400." + data.productImagesDTO[0].extension
                                    } alt="image" />
                                    <img src={"https://anydatapoint.net/" + data.adpCustomersDTO.uuid + "/products/400x400/" + data.productImagesDTO[0].name + "-400x400." + data.productImagesDTO[0].extension
                                    } alt="image" />
                                </a>

                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a
                                                data-tip="Quick View"
                                                data-place="left"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    this.openModal();
                                                    this.handleModalData("https://anydatapoint.net/" + data.adpCustomersDTO.uuid + "/products/400x400/" + data.productImagesDTO[0].name + "-400x400." + data.productImagesDTO[0].extension
                                                        , data.adpCustomersDTO.city + "," + data.adpCustomersDTO.country, data.id, data.name, data.minOrder, data.unitOfMeasure)
                                                }
                                                }
                                            >
                                                <i className="far fa-eye"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a data-tip="Add to Wishlist" data-place="left">
                                                <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a data-tip="Add to Compare" data-place="left">
                                                <i className="fas fa-sync"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="product-content">
                                <h3>
                                    <Link href="/product-details">
                                        <a>{data.name}</a>
                                    </Link>
                                </h3>

                                <div className="product-price">
                                    <span className="new-price">Location: {data.adpCustomersDTO.city + "," + data.adpCustomersDTO.country}</span>
                                </div>
                                <div >
                                    <span >MIN: {data.minOrder} </span> <span > ||  Unit:  {data.unitOfMeasure}</span>
                                </div>

                                {/* <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div> */}

                                <Link href="#">
                                    <a
                                        className="btn btn-light"
                                        onClick={(e) => {
                                            e.preventDefault(); this.handleAddToCart(data.id)
                                        }}
                                    >
                                        Add to Cart
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                {modalOpen ? <QuickView
                    closeModal={this.closeModal}
                    idd={this.state.idd}
                    image={this.state.modalImage}
                    price={this.state.price}
                    title={this.state.title}
                    minOrder={this.state.minOrder}
                    Unit={this.state.Unit}
                /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsCard)
