import { useState } from 'react';
import style from './ClientLogin.module.scss';

import { MdOutlineClose } from 'react-icons/md';

function ClientLogin({ openCloseFunc }) {
    const [luaChon, setLuaChon] = useState(0);

    const dangnhap = () => {

        localStorage.setItem('user', 'value')
        window.location.reload();
    }
    const dangki = () => {

        localStorage.setItem('user', 'value')
        window.location.reload();
    }
    return (

        <div className={style.client_login}>

            <div className={style.wrap}>
                <button style={{ backgroundColor: luaChon === 1 ? "rgb(23, 9, 22)" : "white", color: luaChon === 0 ? "rgb(23, 9, 22)" : "white" }} className={style.the_tren} onClick={() => setLuaChon(0)}>Đăng nhập</button>
                <button style={{ backgroundColor: luaChon === 0 ? "rgb(23, 9, 22)" : "white", color: luaChon === 1 ? "rgb(23, 9, 22)" : "white" }} className={style.the_tren} onClick={() => setLuaChon(1)}>Đăng kí</button>
                <div className={style.conntainer}>

                    {
                        luaChon === 0
                            ?
                            <div className={style.dangNhap}>
                                <div>
                                    <label htmlFor="email">email:</label>
                                    <input id='email' type="text" />
                                </div>
                                <div>
                                    <label htmlFor="pass">password:</label>
                                    <input id='pass' type="text" />
                                </div>

                                <button onClick={dangnhap}>Đăng nhập</button>
                            </div>
                            :
                            <div className={style.dang_ki}>
                                <div>
                                    <label htmlFor="ten">Tên:</label>
                                    <input id='ten' type="text" />
                                </div>
                                <div>
                                    <label htmlFor="email">email:</label>
                                    <input id='email' type="text" />
                                </div>
                                <div>
                                    <label htmlFor="pass">password:</label>
                                    <input id='pass' type="text" />
                                </div>
                                <div>
                                    <label htmlFor="diachi">Dia chi:</label>
                                    <input id='diachi' type="text" />
                                </div>
                                <div>
                                    <label htmlFor="mabc">Mã bưu cục:</label>
                                    <input id='mabc' type="text" />
                                </div>
                                <div>
                                    <label htmlFor="so">Số điện thoại:</label>
                                    <input id='so' type="text" />
                                </div>

                                <button onClick={dangki}>Đăng Kí</button>
                            </div>
                    }
                </div>
                <MdOutlineClose onClick={openCloseFunc} className={style.icon} />
            </div>
        </div>
    )
};

export default ClientLogin;