import style from './CartItemBase.module.scss';
import { Link } from 'react-router-dom';
import ShowPrice from '../../component/globalFunction/ShowPrice';

function CartItemBase({idSanPham, anhDaiDien, tenSanPham, gia, children}) {

    return (
        <div className={style.cart_item}>
            <div className={style.cart_img} style={{ backgroundImage: `url(${anhDaiDien})` }}></div>
            <div className={style.cart_text}>
                <Link className={style.ten_san_pham} to={`/product/${idSanPham}`}>{tenSanPham}</Link>
                <h3>Giá: {ShowPrice(gia)}</h3>
                {children}
            </div>
        </div>
    )
};

export default CartItemBase;