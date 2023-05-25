import { Fragment, useState } from 'react';
import style from './CartItem.module.scss';
import CartItemBase from './CartItemBase';

function CartItem({ idSanPham, anhDaiDien, tenSanPham, gia, soLuong }) {

    const [trangThai, setTrangThai] = useState(true);
    const [mySoLuong, setMySoLuong] = useState(soLuong);
    return (
        <Fragment>
            {
                trangThai
                    ? <CartItemBase
                        idSanPham={idSanPham}
                        anhDaiDien={anhDaiDien}
                        tenSanPham={tenSanPham}
                        gia={gia}
                    >
                        < div >
                            <span className={style.so_luong}>Số lượng:</span>
                            <input onChange={(e) => setMySoLuong(e.target.value)} className={style.so_luong_input} id='soLuong' type="number" value={mySoLuong} />
                        </ div>
                        <h5 onClick={()=>setTrangThai(false)} className={style.choose}>Xóa</h5>
                        <h5 className={style.choose}>Mua</h5>
                    </CartItemBase >
                    : ""
            }

        </Fragment>
    )
};

export default CartItem;