import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Fragment } from 'react';

function Client({ children }) {

    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Client;