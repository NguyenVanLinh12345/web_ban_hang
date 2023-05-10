import style from './ProductLeftSide.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

function ProducsLeftSide() {
    const arr = [
        {
            id: 1,
            name: "Danh muc 1"
        },
        {
            id: 2,
            name: "Danh muc 2"
        },
        {
            id: 3,
            name: "Danh muc 3"
        },
        {
            id: 4,
            name: "Danh muc 4"
        }
    ];

    const func1 = ()=> console.log("func link");
    const func2 = ()=> console.log("func icon");
    const func3 = ()=> console.log("func loc theo gia");

    return (
        <div className={style.product_left_side}>
            <div>
                <p className={style.title}>Danh muc san pham</p>
                <ul className={style.danh_muc}>
                    {
                        arr.map(value => (
                            <li key={value.id}>
                                <span className={style.link}>
                                    <span onClick={func1} className={style.link_title}>{value.name}</span>
                                    <IoIosArrowDown onClick={func2}/>
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className={style.title}>Loc theo gia</p>
                <div className={style.filter}>
                    <input type="text" name='Tu' />
                    <input type="text" name='den' />
                </div>
                <button className={style.btn_filter} onClick={func3}>Loc</button>
            </div>

        </div>
    )
}

export default ProducsLeftSide;