import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const TopHeader = dynamic(import('./TopHeader'));
const MegaMenu = dynamic(import('./MegaMenu'));

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>

                <TopHeader />
                <MegaMenu />
            </React.Fragment>
        );
    }
}

export default Navbar;
