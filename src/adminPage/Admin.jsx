import { Fragment } from 'react'
import AdminSidebar from './AdminSidebar';

function Admin({ children }) {

    return (
        <Fragment>
            <AdminSidebar />
            <div style={{marginLeft: "30rem", backgroundColor: "lightgrey", minHeight: "100vh"}}>
                {children}
            </div>
        </Fragment>
    )
}
export default Admin;