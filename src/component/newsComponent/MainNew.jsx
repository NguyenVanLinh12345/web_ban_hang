import style from './MainNew.module.scss';
import NewComment from './NewComment';

import ShowDate from '../globalFunction/ShowDate';

import logo from '../../asets/img/imgfooter.jpeg';
let myimage = "https://vapa.vn/wp-content/uploads/2022/12/anh-dep-lam-hinh-nen-002.jpg";
let mycontent = `Từ những việc bình thường của xã hội nhưng không ít trang mạng khi đăng tải lại cố ý đưa chi tiết câu view, câu like để thu hút tương tác. Việc này vô tình tạo ra thói quen xấu cho một số người khi bình luận trên không gian số. Họ sẵn sàng đưa những bình luận mang tính tiêu cực, khiếm nhã và thậm chí là quấy rối những người vốn không ai nghĩ có thể là đối tượng cho những việc này.
Những “cuộc thi” không tưởng và sự quấy rối trên MXH – Chuyện nóng hôm nay trên Chuyển động 24h hôm nay.`;

function MainNew({ date = "2023-12-12", content = mycontent, image = myimage, danhSachBinhLuan = [] }) {
    return (
        <div className={style.MainNew}>
            <div className={style.header}>
                <div className={style.avatar} style={{ backgroundImage: `url(${logo})` }} />
                <div>
                    <p className={style.name}>Văn phòng phẩm MoNa</p>
                    <p className={style.date}>{ShowDate(date)}</p>
                </div>
            </div>

            <div className={style.body}>
                {content === "" | content === null ? "" : <p>{content}</p>}
                <div style={{ backgroundImage: `url(${image})` }} className={style.image}></div>
            </div>

            <div className={style.comment}>
                <NewComment></NewComment>
            </div>

            <div className={style.list_comment}>
                <div className={style.item_comment}>
                    <div className={style.item_comment_image} style={{ backgroundImage: `url(${image})` }} />
                    <div className={style.item_comment_text}>
                        <h3>Nguyen Van A<span>{ShowDate("2023-12-12")}</span></h3>
                        <p>{content}</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainNew;