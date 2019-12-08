import React, { Component } from 'react';

class TopHeader extends Component {

    state = {
        display: false
    };

    handleWishlist = () => {
        this.setState(prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">

                                    <li><span><i className="fas fa-phone"></i> Hotline: (+42) 364 001 62</span></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default TopHeader;
