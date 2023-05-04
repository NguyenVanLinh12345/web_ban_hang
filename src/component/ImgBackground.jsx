import style from './ImgBackground.module.scss';

function ImgBackground({title, ulrImage}){
    console.log(ulrImage)
    return (
        <div className={style.img_background}>
            <div style={{backgroundImage: `url(${ulrImage})`}}></div>
            <p>{title}</p>
        </div>
    )
};

export default ImgBackground;