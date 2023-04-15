import style from './Category.module.scss';
import { danhsach } from './data';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Category() {

    return (
        <div className={style.category}>
            <p className={style.title}>DANH MỤC SẢN PHẨM</p>
            <ul className={style.danh_sach}>
                {
                    danhsach.map((value, index) =>
                    (<li className={style.main_li} key={index}>
                        <Link className={style.link} to={`/products/${value.path}`}>
                            <span>{value.name}</span>
                            <span className={style.wrapIcon}><MdKeyboardArrowRight className={style.icon} /></span>

                            <ul className={style.hidden_element}>
                                {
                                    value.arr.map((value1, index1) => (
                                        <li key={index1}>
                                            <Link className={style.link} to={`products/${value.path}/${value1.path}`}>{value1.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Link>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category;