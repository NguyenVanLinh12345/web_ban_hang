import style from "./ImageItem.module.scss";
import ShowPrice from "../globalFunction/ShowPrice";
import { Link } from "react-router-dom";

function ImageItem({ src, name = "Ten cua san pham", price = 10000 }) {
    name = name.length > 8 ? (name.substring(0, 8) + "...") : name;
    price = ShowPrice(price)
    price = price.length > 8 ? (price.substring(0, 8) + "...") : price
    return (
        <Link to={`/product/1`} className={style.image} style={{ backgroundImage: `url(${src})` }}>
            <div className={style.container_content}>
                <p className={style.name}>{name}</p>
                <p className={style.price}>{price}<span>đ</span></p>
            </div>
        </Link>
    )
}

export default ImageItem;