import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import dynamic from 'next/dynamic';

// import Cart from '../Modal/Cart';
const Cart = dynamic(import('../Modal/Cart'));

class MegaMenu extends Component {

    state = {
        display: false,
        searchForm: false,
        collapsed: true
    };

    handleCart = () => {
        this.setState(prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    handleSearchForm = () => {
        this.setState(prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { products } = this.props;
        return (
            <React.Fragment>
                <div className="navbar-area">
                    <div id="navbar" className="comero-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">

                                        <h3>IntelliCatalog</h3>
                                    </a>
                                </Link>

                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">

                                    </ul>

                                    <div className="others-option">
                                        <div className="option-item">
                                            <a className="color-black">
                                                <input name="search" placeholder="Search" type="radio" />Products
                                            </a>
                                        </div>
                                        <div className="option-item">
                                            <a className="color-black">
                                                <input name="search" placeholder="Search" type="radio" />Supplier
                                            </a>
                                        </div>

                                        <div className="option-item">



                                            <div
                                                className="search-overlay search-popup"

                                            >
                                                <div className='search-box'>
                                                    <form className="search-form">

                                                        <input className="search-input" name="search" placeholder="Search..." type="text" />

                                                        <button className="search-button" type="submit"><i className="fas fa-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="option-item">
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </div>

                                        <div className="option-item">
                                            <Link href="#">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        this.handleCart()
                                                    }}
                                                >
                                                    Cart({products.length}) <i className="fas fa-shopping-bag"></i>
                                                </a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(MegaMenu)
