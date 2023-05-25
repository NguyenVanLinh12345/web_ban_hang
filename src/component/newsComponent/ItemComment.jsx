import style from './ItemComment.module.scss';

import ShowDate from '../globalFunction/ShowDate';
function ItemComment({anhDaiDien, ngayBinhLuan, tenNguoiBinhLuan, noidung, anhComment}) {

    return (
        <div className={style.item_comment0}>
            <div className={style.item_comment}>
                <div className={style.item_comment_image} style={{ backgroundImage: `url(${anhDaiDien})` }} />
                <div className={style.item_comment_text}>
                    <h3>{tenNguoiBinhLuan}<span>{ShowDate(ngayBinhLuan)}</span></h3>
                    <p>{noidung}</p>
                </div>
            </div>
            {
                anhComment
                    ? <img className={style.anh_comment} src={anhComment} alt="anh" />
                    : ""
            }
        </div>
    )
}

export default ItemComment;