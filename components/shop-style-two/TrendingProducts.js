import React, { Component } from 'react';
import dynamic from 'next/dynamic';

import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuickView = dynamic(import('../Modal/QuickView'));
const OwlCarousel = dynamic(import('react-owl-carousel3'));


const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class TrendingProducts extends Component {
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

    componentDidMount() {
        this.setState({ display: true })
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image, price, id, title, minOrder, Unit) => {
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
        const { modalOpen } = this.state;

        const { product } = this.props;
        return (
            <section className="trending-products-area pb-60">
                <ReactTooltip />
                <ToastContainer transition={Slide} />

                {product.map((data, idx) => (

                    <div className="container">
                        <div className="section-title without-bg">
                            <h2 key={idx}><span className="dot"></span>{data.desctiption}</h2>
                        </div>
                        <div className="row">
                            {this.state.display ? <OwlCarousel
                                className="trending-products-slides owl-carousel owl-theme"
                                {...options}
                            >

                                {data.productsDTO.map((data, idx) => (
                                    <div className="col-lg-12 col-md-12">
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/product-details">
                                                    <a>
                                                        <img src={"https://anydatapoint.net/" + data.adpCustomersDTO.uuid + "/products/400x400/" + data.productImagesDTO[0].name + "-400x400." + data.productImagesDTO[0].extension
                                                        } style={{ height: '260px', width: '400px', transition: '2s filter linear' }} className="lozad" alt="image" />

                                                        <img src={"https://anydatapoint.net/" + data.adpCustomersDTO.uuid + "/products/400x400/" + data.productImagesDTO[0].name + "-400x400." + data.productImagesDTO[0].extension
                                                        } style={{ height: '260px', width: '400px', transition: '2s filter linear' }} className="lozad" alt="image" />
                                                    </a>
                                                </Link>

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
                                                        <a key={idx}>{data.name}</a>
                                                    </Link>
                                                </h3>

                                                <div >
                                                    <span className="new-price">Location: {data.adpCustomersDTO.city + "," + data.adpCustomersDTO.country}</span>
                                                </div>
                                                <div >
                                                    <span >MIN: {data.minOrder} </span> <span > ||  Unit:  {data.unitOfMeasure}</span>
                                                </div>

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


                            </OwlCarousel> : ''}
                        </div>

                    </div >))}
                {modalOpen ? <QuickView
                    closeModal={this.closeModal}
                    idd={this.state.idd}
                    image={this.state.modalImage}
                    price={this.state.price}
                    title={this.state.title}
                    minOrder={this.state.minOrder}
                    Unit={this.state.Unit}

                /> : ''}
            </section>
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
)(TrendingProducts)
