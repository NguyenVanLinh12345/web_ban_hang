import style from './MainNew.module.scss';
import NewComment from './NewComment';

import ShowDate from '../globalFunction/ShowDate';

import logo from '../../asets/img/imgfooter.jpeg';
import ItemComment from './ItemComment';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { useState } from 'react';

let myimage = "https://vapa.vn/wp-content/uploads/2022/12/anh-dep-lam-hinh-nen-002.jpg";
let mycontent = `Từ những việc bình thường của xã hội nhưng không ít trang mạng khi đăng tải lại cố ý đưa chi tiết câu view, câu like để thu hút tương tác. Việc này vô tình tạo ra thói quen xấu cho một số người khi bình luận trên không gian số. Họ sẵn sàng đưa những bình luận mang tính tiêu cực, khiếm nhã và thậm chí là quấy rối những người vốn không ai nghĩ có thể là đối tượng cho những việc này.
Những “cuộc thi” không tưởng và sự quấy rối trên MXH – Chuyện nóng hôm nay trên Chuyển động 24h hôm nay.`;

let danhsach = [
    {
        id: 1,
        anhDaiDien: myimage,
        ten: "Nguyen Van A",
        date: "2023-12-12",
        noidung: mycontent,
        anh: myimage
    },
    {
        id: 2,
        anhDaiDien: myimage,
        ten: "Nguyen Van A",
        date: "2023-12-12",
        noidung: mycontent,
        anh: ""
    }
]

function MainNew({ date = "2023-12-12", content = mycontent, image = myimage, danhSachBinhLuan = [] }) {
    const [showComment, setShowComment] = useState(false);

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

            <div className={style.control}>
                <div className={style.control_item}>
                    <AiOutlineLike />
                    <span>Like</span>
                </div>

                <div onClick={()=>setShowComment(!showComment)} className={style.control_item}>
                    <BiComment />
                    <span>Bình luận</span>
                </div>

                <div className={style.control_item}>
                    <RiShareForwardLine />
                    <span>Chia sẻ</span>
                </div>
            </div>

            <div className={style.comment}>
                <NewComment></NewComment>
            </div>


            {
                showComment
                    ?
                    <div className={style.list_comment}>
                        {
                            danhsach.map((value) => (
                                <ItemComment
                                    key={value.id}
                                    anhDaiDien={value.anhDaiDien}
                                    tenNguoiBinhLuan={value.ten}
                                    ngayBinhLuan={value.date}
                                    noidung={value.noidung}
                                    anhComment={value.anh}
                                />
                            ))
                        }
                    </div>
                    : ""
            }
        </div>
    )
};

export default MainNew;