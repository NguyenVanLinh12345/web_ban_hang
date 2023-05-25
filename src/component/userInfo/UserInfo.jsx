import style from './UserInfo.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';

import { getUserInfo, updateUserInfo } from '../globalFunction/UserInfoFunc';
import { useEffect, useReducer, useState } from 'react';
import reducer, { initState } from './reduce';

function UserInfo({ closeCartFunc }) {
    const [todos, dispatch] = useReducer(reducer, initState);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                dispatch({type: "anhDaiDien", payload: reader.result})
            };
            reader.readAsDataURL(file);
        }
    }

        useEffect(() => {
            getUserInfo(dispatch);
        }, [])
        return (
            <div className={style.cart}>
                <div className={style.container}>
                    <MdOutlineClose onClick={closeCartFunc} className={style.cart_close} />
                    <h1>Thông tin</h1>

                    <div className={style.user_info}>
                        <div className={style.avatar} style={{ backgroundImage: `url("${todos.anhDaiDien}")` }}>
                            <label htmlFor='avatar'><BsPencil /></label>
                            <input onChange={handleImageChange} id='avatar' style={{ display: "none" }} type="file" />
                        </div>

                        <div className={style.text}>
                            <label htmlFor="ten">Tên:</label>
                            <input
                                id='ten'
                                type="text"
                                value={todos.ten}
                                onChange={(e) => dispatch({ type: "ten", payload: e.target.value })}
                            />
                        </div>

                        <div className={style.text}>
                            <label htmlFor="address">Địa chỉ:</label>
                            <input
                                id='address'
                                type="text"
                                value={todos.diaChi}
                                onChange={(e) => dispatch({ type: "diachi", payload: e.target.value })}
                            />
                        </div>

                        <button onClick={() => updateUserInfo(selectedImage, todos)} >Lưu thông tin</button>
                    </div>
                </div>
            </div>
        )
    }

    export default UserInfo;