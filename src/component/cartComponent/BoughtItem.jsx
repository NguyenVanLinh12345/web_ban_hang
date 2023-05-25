import style from './BoughtItem.module.scss';
import CartItemBase from './CartItemBase';

function BoughtItem({ idSanPham, anhDaiDien, tenSanPham, gia, soLuong, ngayMua, trangThai }) {

    return (
        <CartItemBase
            idSanPham={idSanPham}
            anhDaiDien={anhDaiDien}
            tenSanPham={tenSanPham}
            gia={gia}
        >
            <span className={style.bought_span}>Số lượng: {soLuong}</span>
            <span className={style.bought_span}>Ngày mua: {ngayMua}</span>
            <span className={style.bought_span}>Trạng thái: {trangThai}</span>
        </CartItemBase>
    )
};

export default BoughtItem;