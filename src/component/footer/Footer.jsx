import style from './Footer.module.css';
import Slide from './Slide';

import { VscBook } from "react-icons/vsc";
import Item from './Item';

function Footer(){
    const arr = ["Trang chu", "Gioi thieu", "Cua hang", "Tin tuc", "Lien he"];
    return (
        <footer className={style.footer}>
            <Slide />

            <div>
                {
                    arr.map((value, index)=>(
                        <Item icon={<VscBook />}/>
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer;