import style from "./Item.module.css";
import { Link } from 'react-router-dom';;

function Item({ icon, myHref, name, myClass = "" }) {
    return (
        <Link className={`${style.link} ${myClass}`} to={myHref}>
            <span>{icon}</span>
            <span className={style.name}>{name}</span>
        </Link>
    )
}

export default Item;