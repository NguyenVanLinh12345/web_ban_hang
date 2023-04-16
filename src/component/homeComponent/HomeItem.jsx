import style from './HomeItem.module.scss';
import ShowPrice from '../globalFunction/ShowPrice';

const imgProduct = "https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg"
function HomeItem({imgUrl = imgProduct, name, price=1000000}) {

    return (
        <div className={style.home_item}>
            <div className={style.img} style={{ backgroundImage: `url(${imgUrl})` }} />
            <h1 className={style.name}>{name}</h1>
            <h2 className={style.price}>{ShowPrice(price)} <span>đ</span></h2>
        </div>
    )
}