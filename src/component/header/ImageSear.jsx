<<<<<<< HEAD
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

=======
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

>>>>>>> 49645612789691bcb586d9a3a0b43e0a2cc3aed6
export default ImageSearch;