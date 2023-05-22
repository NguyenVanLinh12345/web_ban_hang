import { Fragment } from 'react'
import AdminSidebar from './AdminSidebar';
import AdminLogin from './AdminLogin';

function Admin({ children }) {

    return (
        <Fragment>
            {
                (localStorage.getItem("admin") !== null)
                    ?
                    <Fragment>
                        < AdminSidebar />
                        <div style={{ marginLeft: "30rem", backgroundColor: "lightgrey", minHeight: "100vh" }}>
                            {children}
                        </div>
                    </Fragment>
                    :
                    <AdminLogin />
            }
        </Fragment>
    )
}
export default Admin;