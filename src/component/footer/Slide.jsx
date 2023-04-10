import style from './Slide.module.css';

import footer1 from '../../asets/img/slide/footer_item1.png';
import footer2 from '../../asets/img/slide/footer_item2.png';
import footer3 from '../../asets/img/slide/footer_item3.png';
import footer4 from '../../asets/img/slide/footer_item4.png';
import footer5 from '../../asets/img/slide/footer_item5.png';
import footer6 from '../../asets/img/slide/footer_item6.png';

function Slide() {
    let arr = [footer1, footer2, footer3, footer4, footer5, footer6];
    return (
        <div className={style.slide}>
            <div className="hiddenX">
                <div className={style.slip}>
                    {
                        arr.map((value, index) => (
                            <span key={index} className={style.item} >
                                <img src={value} alt="Lien he voi chung toi" />
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Slide;