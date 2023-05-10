import style from './AdminSendEmail.module.scss';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function AdminSendEmail() {
    const divContent = (value) => `<div style="background-color: #f0f0f0;font-family: Arial, sans-serif;color: #333;">${value}</div>`;

    const [send, setSend] = useState("");

    const [titleEmail, setTitleEmail] = useState("");

    const h1Content = (value) => `<h1 style="color: #c00;font-size: 24px;text-align: center;">${value}</h1>`;
    const [h1Text, setH1Text] = useState("");

    const pContent = (value) => `<p>${value}</p>`;
    const [pText, setPText] = useState("");

    const ulContent = (value) => `<ul>${value}</ul>`;
    const liContent = (value) => `<li>${value}</li>`;
    const [liText, setLiText] = useState("");
    const [liArr, setLiArr] = useState([]);

    const guiEmail = () => {
        const myEmail = {
            typeUser: '1',
            title: titleEmail,
            content: divContent(send),
        };

        fetch('http://localhost:8080/send-email/html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myEmail),
        })
            .then(response => response.json())
            .then(data => {
                setSend("");
            })
            .catch(error => console.error(error));
    }

    return (
        <div className={style.SendEmail}>
            <input className={style.sendto} onChange={(e) => setTitleEmail(e.target.value)} placeholder='Tieu de email...' type="email" />

            <div className={style.controlerEmail}>
                <div>
                    <input placeholder='Nhap tieu de buc thu...' onChange={(e) => setH1Text(e.target.value)} value={h1Text} type="text" />
                    <button onClick={() => {
                        if (h1Text !== "") {
                            setSend(send + h1Content(h1Text))
                            setH1Text("");
                        }
                    }}>Them tieu de</button>
                </div>

                <div>
                    <input placeholder='Nhap noi dung...' onChange={(e) => setPText(e.target.value)} value={pText} type="text" />
                    <button onClick={() => {
                        if (pText !== "") {
                            setSend(send + pContent(pText))
                            setPText("")
                        }
                    }}>Them noi dung</button>

                </div>

                <div>
                    <ul>
                        {
                            liArr.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))
                        }
                    </ul>
                    <input placeholder='Nhap the con...' onChange={(e) => setLiText(e.target.value)} value={liText} type="text" />
                    <button onClick={() => {
                        if (liText !== "") {
                            setLiArr([...liArr, liText]);
                            setLiText("");
                        }
                    }
                    }>Them the con</button>
                    <button style={{ margin: "1.2rem auto", display: "block" }} onClick={() => {
                        if (liArr !== []) {
                            setSend(send + ulContent(liArr.map((value) => liContent(value)).join("")));
                            setLiText("");
                            setLiArr([]);
                        }
                    }}>Them danh sach</button>
                </div>

            </div>
            <div dangerouslySetInnerHTML={{ __html: send }} className={style.showcontent}>
            </div>
                <span onClick={()=>setSend("")}><AiOutlineCloseCircle className={style.iconDeleteSend}/></span>
            
            <div className={style.guiEmail}>
            <select name="" id="">
                <option value="1">Tat ca khach hang</option>
                <option value="2">Khach hang da dang ki</option>
                <option value="3">Khach hang chua dang ki</option>
            </select>
            <button onClick={guiEmail}>Gui email</button>
            </div>
        </div>
    )
}

export default AdminSendEmail;