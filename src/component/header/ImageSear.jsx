import style from './ImageSearch.module.css';

function ImageSearch({ url }) {

    return (
        <div className={style.image_search} style={{ backgroundImage: `url(${url})` }}>
            <div>
                <p className={style.scan}>SCANNING...</p>
                <div className={style.searching}></div>
            </div>
        </div>
    )
}

export default ImageSearch;