import style from './Col_Inner.module.scss';

import { Link } from 'react-router-dom';

const img_link = "https://baoangiang.com.vn/image/fckeditor/upload/2020/20200628/images/14.jpg"
function ColInner() {

    return (
        <div>
            <div className={style.container}>
                <Link style={{ backgroundImage: `url(${img_link})` }} className={style.banner_link}>
                    <p>TOP SALE</p>
                    <h1>PRODUCT</h1>
                </Link>
            </div>

            <div>
                <h3 className={style.title}>BÁN CHẠY</h3>

                <Link to={""}>
                    <img src="" alt="" />
                    <div>
                        <h1>Kim bấm</h1>
                        <h2>30.000 <span>đ</span></h2>
                    </div>
                </Link>
            </div>

            <div>
                <h3 className={style.title}>TIN TỨC</h3>
                
                <div>
                        <Link to={"/"}>
                        <img src="" alt="" />
                        <h1>Sản phẩm bảo hộ lao động</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,...</p>

                        </Link>

                        <Link to={"/"}>
                        <img src="" alt="" />
                        <h1>Sản phẩm bảo hộ lao động</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,...</p>

                        </Link>
                </div>
            </div>

            <div>
                <h3 className={style.title}>SALE</h3>

                <Link to={""}>
                    <img src="" alt="" />
                    <div>
                        <h1>Kim bấm</h1>
                        <h2>30.000 <span>đ</span></h2>
                    </div>
                </Link>
            </div>

            <div>
                <h1>Đăng kí nhận tin</h1>
                <p>Để lại email để nhận những thông tin mới nhất và không bỏ lỡ ưu đãi nào từ chúng tôi</p>
                <input type="text" />
                <button>Đăng ký</button>
            </div>
            <div>
                <h1>NHẬN XÉT</h1>
                
                <div>
                    <div name="img phần nhận xét"></div>
                    <p>"Để lại email để nhận những thông tin mới nhất và không bỏ lỡ ưu đãi nào từ chúng tôi"</p>
                    <p><span>anh Khoa</span>/<span>Mona Media</span></p>
                </div>

                <div>
                    <div name="img phần nhận xét"></div>
                    <p>"Để lại email để nhận những thông tin mới nhất và không bỏ lỡ ưu đãi nào từ chúng tôi"</p>
                    <p><span>anh Khoa</span>/<span>Mona Media</span></p>
                </div>
            </div>

        </div>
    )
}

export default ColInner;