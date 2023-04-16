import style from './Col_Inner.module.scss';

import { Link } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useState } from 'react';

const img_link = "https://baoangiang.com.vn/image/fckeditor/upload/2020/20200628/images/14.jpg"
function ColInner() {
    let arr = [1, 2];
    let [tinTuc, setTinTuc] = useState(0);
    let [thanhVien, setThanhVien] = useState(0);

    useEffect(() => {
     const thanhVienInterval = setInterval(() => {
            if (thanhVien === 1)
                setThanhVien(thanhVien - 1);
            else
                setThanhVien(thanhVien + 1);
            // console.log(thanhVien);
        }, 6000)
        return () => clearInterval(thanhVienInterval);
    })
    return (
        <div>
            <div className={style.container}>
                <Link style={{ backgroundImage: `url(${img_link})` }} className={style.banner_link}>
                    <p>TOP SALE</p>
                    <h1>PRODUCT</h1>
                </Link>
            </div>

            <div className={`${style.ban_chay} ${style.border_bottom_gray}`}>
                <h3 className={style.title}>BÁN CHẠY</h3>

                <ul>
                    {
                        arr.map(value => (
                            <li key={value}>
                                <Link to={""}>
                                    <div style={{ backgroundImage: `url(${img_link})` }} className={style.item_img}></div>
                                    <div className={style.item_text}>
                                        <h1>Kim bấm</h1>
                                        <h2>30.000 <span>đ</span></h2>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div className={`${style.tin_tuc} ${style.border_bottom_gray}`}>
                <h3 className={style.title}>TIN TỨC</h3>
                <div className={style.tin_tuc_wrap}>
                    <ul style={{ transform: `translateX(-${27 * tinTuc}rem)` }}>
                        {
                            arr.map(value => (
                                <li key={value}>
                                    <Link to={"/"}>
                                        <div style={{ backgroundImage: `url(${img_link})` }} className={style.tin_tuc_img}></div>
                                        <h1>Sản phẩm bảo hộ lao động</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,...</p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div onClick={() => setTinTuc(tinTuc - 1)}
                    className={`${style.tin_tuc_control} ${style.tin_tuc_control_left}`}><AiOutlineLeft /></div>
                <div onClick={() => setTinTuc(tinTuc + 1)}
                    className={`${style.tin_tuc_control} ${style.tin_tuc_control_right}`}><AiOutlineRight /></div>
            </div>

            <div className={style.ban_chay}>
                <h3 className={style.title}>SALE</h3>
                <ul>
                    {
                        arr.map(value => (
                            <li key={value}>
                                <Link to={""}>
                                    <div style={{ backgroundImage: `url(${img_link})` }} className={style.item_img}></div>
                                    <div className={style.item_text}>
                                        <h1>Kim bấm</h1>
                                        <h2>30.000 <span>đ</span></h2>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div className={style.dang_ki_nhan_tin}>
                <h1>Đăng kí nhận tin</h1>
                <p>Để lại email để nhận những thông tin mới nhất và không bỏ lỡ ưu đãi nào từ chúng tôi</p>
                <input placeholder='Email...' type="text" />
                <button>Đăng ký</button>
            </div>
            <div className={style.nhan_xet}>
                <h1 className={style.title}>Thanh vien</h1>
                <div className={style.nhan_xet_wrap}>
                    <ul style={{ transform: `translateX(-${27 * thanhVien}rem)` }}>
                        {
                            arr.map(value => (
                                <li key={value}>
                                    <div className={style.nhan_xet_img} style={{ backgroundImage: `url(${img_link})` }}></div>
                                    <div className={style.nhan_xet_text}>
                                        <p className={style.nhan_xet_mo_ta}>"Để lại email để nhận những thông tin mới nhất và không bỏ lỡ ưu đãi nào từ chúng tôi"</p>
                                        <p><span className={style.nhan_xet_ten}>anh Khoa</span>/<span className={style.nhan_xet_chuc_vu}>Mona Media</span></p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ColInner;