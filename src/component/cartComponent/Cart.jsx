import style from './Cart.module.scss';
import ShowPrice from '../globalFunction/ShowPrice';
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';

let img = "https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg";

let danhsach = [
    {
        id: 1,
        anhDaiDien: img,
        tenSanPham: "Ten san pham",
        gia: 100,
        soLuong: 10
    },
    {
        id: 2,
        anhDaiDien: img,
        tenSanPham: "Ten san pham",
        gia: 100,
        soLuong: 10
    },
    {
        id: 3,
        anhDaiDien: img,
        tenSanPham: "Ten san pham",
        gia: 100,
        soLuong: 10
    }
]

function Cart({ closeCartFunc }) {

    return (
        <div className={style.cart}>
            <div className={style.container}>
                <MdOutlineClose onClick={closeCartFunc} className={style.cart_close} />
                <h1>Giỏ hàng</h1>

                {
                    danhsach.map((value) => (
                        <div key={value.id} className={style.cart_item}>
                            <div className={style.cart_img} style={{ backgroundImage: `url(${value.anhDaiDien})` }}></div>
                            <div className={style.cart_text}>
                                <Link className={style.ten_san_pham} to={`/product/1`}>{value.tenSanPham}</Link>
                                <h3>Giá: {ShowPrice(value.gia)}</h3>
                                <span>Số lượng:</span>
                                <input id='soLuong' type="text" value={value.soLuong}/>
                                <h5>Xóa</h5><h5>Chọn</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;