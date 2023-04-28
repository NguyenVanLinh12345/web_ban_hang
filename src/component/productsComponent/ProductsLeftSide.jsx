import style from './ProductLeftSide.module.scss';
import { Link } from 'react-router-dom';
function ProducsLeftSide() {

    return (
        <div className={style.product_left_side}>
            <div>
            <p className={style.title}>Danh muc san pham</p>
            <ul className={style.danh_muc}>
                <li>
                    <Link className={style.link}>
                        <span>San pham cha</span>
                        <ul className={style.danh_muc_con}>
                            <li><Link className={style.link_con}>San pham demo</Link></li>
                            <li><Link className={style.link_con}>San pham demo</Link></li>
                        </ul>
                    </Link>
                </li>
            </ul>
            </div>

            <div>
            <p className={style.title}>Loc theo gia</p>
             <div>
                <input type="text" name='Tu'/>
                <input type="text" name='den'/>
             </div>
            </div>
            
        </div>
    )
}

export default ProducsLeftSide;