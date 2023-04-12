import style from './ImageSearch.module.css';

function ImageSearch({ url, searching }) {
    return (
        <div className={style.image_search} style={{ backgroundImage: `url(${url})` }}>
            {
                searching
                    ? <div>
                        <p className={style.scan}>SCANNING...</p>
                        <div className={style.searching}></div>
                    </div>
                    : ""
            }
        </div>
    )
}

export default ImageSearch;