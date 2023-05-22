import { Link } from 'react-router-dom';
import style from './AdminSidebar.module.scss';

import { BsTable } from 'react-icons/bs';
import { AiFillDashboard } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWallet } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

function AdminSidebar({name= "Nguyen Van A"}){

    const logout = ()=>{
        localStorage.removeItem('admin');
        window.location.reload();
    }

    return(
        <div className={style.admin_side_bar}>
            <h2 className={style.people}>{name}</h2>

            <div className={style.nav}>
                <ul>
                    <li>
                        <Link to="/admin" className={style.nav_item}><AiFillDashboard className={style.nav_icon}/>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/AdminProducts" className={style.nav_item}><BsTable className={style.nav_icon}/>Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/AdminUsers" className={style.nav_item}><CiUser className={style.nav_icon}/>Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/AdminEmployes" className={style.nav_item}><FaUserTie className={style.nav_icon}/>Employes</Link>
                    </li>
                    <li>
                        <Link to="/admin/AdminSendEmail" className={style.nav_item}><AiOutlineMail className={style.nav_icon}/>Send Email</Link>
                    </li>
                    <li>
                        <Link to="/admin/AdminNew" className={style.nav_item}><AiOutlineWallet className={style.nav_icon}/>News</Link>
                    </li>
                </ul>
                <button onClick={logout} className={style.logout}><FiLogOut />Logout</button>
            </div>
        </div>
    )
};

export default AdminSidebar;