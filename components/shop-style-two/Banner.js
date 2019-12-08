import React, { Component } from 'react';
// import Link from 'next/link';


const Banner = ({ catagories }) => {

    return (
        <React.Fragment>
            <section className="products-collections-area ptb-60">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="woocommerce-sidebar-area" >
                                <div className="collapse-widget filter-list-widget ">
                                    <h3 className="collapse-widget-title" >Market Catagories</h3>
                                    <ul className="collections-list-row block">
                                        {catagories.map(function (catagory, index) {
                                            return (<li key={index}>
                                                <a href={catagory.desctiption}>{catagory.desctiption}</a>
                                            </li>);
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="main-banner item-bg1">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="container">
                                            <div className="main-banner-content">
                                                <h1 >INTELLIGENT DIGITAL CATALOG</h1>
                                                <p>#1 SALES ACCELERATION PLATFORM</p>
                                                <a className="btn btn-primary" href="#">Join Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    );
}


export default Banner;
