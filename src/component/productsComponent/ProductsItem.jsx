import style from './ProductsItem.module.scss';
import ShowPrice from '../globalFunction/ShowPrice';

import { Link } from 'react-router-dom';

function ProductsItem({ imgUrl, name, price, to }) {

    return (
        <Link to={to} className={style.products_item}>
            <div className={style.wrap_img}>
                <div className={style.img} style={{backgroundImage: `url(${imgUrl})`}}/>
            </div>
            <h1 className={style.name}>{name}</h1>
            <h2 className={style.price}>{ShowPrice(price)} <span>đ</span></h2>
        </Link>
    )
}

export default ProductsItem;