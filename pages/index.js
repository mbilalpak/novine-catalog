import React, { Component } from 'react';
import dynamic from "next/dynamic";
const Navbar = dynamic(import('../components/Layout/Navbar'));
const Banner = dynamic(import('../components/shop-style-two/Banner'));
const Footer = dynamic(import('../components/Layout/Footer'));
import TrendingProducts from '../components/shop-style-two/TrendingProducts';
const axios = require('axios').default;
class Index extends Component {
    static async getInitialProps() {
        let catagories = {};
        let product = {};
        console.log(product);
        try {
            const response = await axios.get('https://rtapipk.jazzba.io/api/v2/intelliCatalog/getAllMarketCategories');
            const response_sec = await axios.get('https://rtapipk.jazzba.io/api/v2/intelliCatalog/getAllMarketCategoriesAndTheirCustomerProducts');
            catagories = response.data.data;
            product = response_sec.data.data;
        } catch (err) {
            console.error(err);
        }
        return { catagories, product };
    }
    render() {
        const { catagories } = this.props;
        const { product } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Banner catagories={catagories} />
                <TrendingProducts product={product} />
                <Footer />
            </React.Fragment>
        );
    }
}
export default Index;
