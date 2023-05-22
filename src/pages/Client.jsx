import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import { Fragment, useState } from 'react';

import ClientLogin from './ClientLogin';

function Client({ children }) {

    const [checkLogin, setCheckLogin] = useState(false);

    return (
        <Fragment>
            <Header login={[(localStorage.getItem('user') !== null), setCheckLogin]} />
            {children}
            <Footer />
            {
                checkLogin
                    ?
                    <ClientLogin openCloseFunc={() => setCheckLogin(false)} />
                    :
                    ""
            }
        </Fragment>
    )
}

export default Client;