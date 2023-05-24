import style from './NewComment.module.scss';
import { ImFilePicture } from 'react-icons/im';
import { AiOutlineSend, AiOutlineCloseCircle } from 'react-icons/ai';

import logo from '../../asets/img/imgfooter.jpeg';
import { useState } from 'react';
import PostNewComment from '../globalFunction/PostNewComment';

function NewComment() {

    const [imageChoose, setImageChoose] = useState(null);
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState("");

    const cleanComment = (value)=>{
        setImageChoose(null);
        setText("");
        setImageUrl("");
        console.log(value);
    }
    const send = () => {
        if (imageChoose !== null || text !== "") {
            PostNewComment(imageChoose, text, cleanComment);
        }
    }

    const handleImgeChange = (e) => {
        const file = e.target.files[0];
        setImageChoose(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className={style.NewComment}>
            <div className={style.avatar} style={{ backgroundImage: `url(${logo})` }} />
            <div className={style.content}>
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Viết bình luận...' className={style.text} type="text" />
                <label htmlFor="file"><ImFilePicture /></label>
                <input onInput={(e) => handleImgeChange(e)} style={{ display: "none" }} id='file' type="file" accept="image/*" />
                {
                    imageUrl
                        ?
                        <div className={style.anh_duoc_chon}>
                            <img src={imageUrl} alt="anh chon" />
                            <span onClick={() => {
                                setImageUrl(null);
                                setImageChoose(null);
                            }}><AiOutlineCloseCircle /></span>
                        </div>
                        : ""
                }
            </div>
            <span onClick={send} className={style.send}><AiOutlineSend /></span>
        </div>
    )
};

export default NewComment;