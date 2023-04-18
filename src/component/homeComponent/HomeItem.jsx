import style from './HomeItem.module.scss';
import ShowPrice from '../globalFunction/ShowPrice';

import { Link } from 'react-router-dom';
function HomeItem({imgUrl, name, price}) {

    return (
        <Link className={style.home_item}>
            <div className={style.img} style={{ backgroundImage: `url(${imgUrl})` }} />
            <h1 className={style.name}>{name}</h1>
            <h2 className={style.price}>{ShowPrice(price)} <span>đ</span></h2>
        </Link>
    )
}

export default HomeItem;