import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

import style from './ProductBottom.module.scss';
import { FaStar } from 'react-icons/fa';

import { useEffect, useState } from 'react';

function ProductBottom({ moTa, idSanPham }) {

    const [danhSachhBinhLuan, setDSBL] = useState([
        {
            id: 1,
            tenNguoiBinhLuan: "Nguyen Van A",
            ngayBinhLuan: "2023-12-12",
            noiDung: "Hang cuc ki tot nha",
            soSao: 4
        }
    ]);
    // const [danhSachhBinhLuan, setDSBL] = useState([]);

    const [luaChon, setLuaChon] = useState(0);

    const [star, setStar] = useState(5);
    const [ten, setTen] = useState("");
    const [email, setEmail] = useState("");
    const [noiDung, setNoiDung] = useState("");

    const toListStar = (length) => {
        let mangTrong = [];
        for (let i = 1; i <= length; i++)
            mangTrong.push(<FaStar key={i} />);
        return mangTrong;
    }

    const postBinhLuan = () => {

        fetch('http://localhost:8080/danhgia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                sanPhamId: idSanPham,
                noiDung: noiDung,
                tenNguoiBinhLuan: ten
            })
        })
            .then(response => response.json())
            .then(data => {
                setDSBL([...danhSachhBinhLuan, data])
                setEmail("");
                setNoiDung("");
                setTen("");
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {

        fetch(`http://localhost:8080/danhgia/sanpham?id=${idSanPham}`)
            .then(response => response.json())
            .then(data => setDSBL(data))
            .catch(error => console.error(error))
    }, [idSanPham])

    return (
        <Grid myClass='mg_bt40'>
            <Row>
                <Col pc={12} table={12} mobie={12}>
                    <button className={`${style.the_tren} ${luaChon === 0 ? style.focus_lua_chon : ""}`} onClick={() => setLuaChon(0)}>Mo ta</button>
                    <button className={`${style.the_tren} ${luaChon === 1 ? style.focus_lua_chon : ""}`} onClick={() => setLuaChon(1)}>Danh Gia</button>
                    <div className={style.conntainer}>

                        {
                            luaChon === 0
                                ?
                                <div className={style.mo_ta}>{moTa}</div>
                                :
                                <div>
                                    {
                                        danhSachhBinhLuan.map((value) => (
                                            <div key={value.id} className={style.binh_luan}>
                                                <h1>{value.tenNguoiBinhLuan}<span>{toListStar(value.soSao)}</span></h1>
                                                <h3>{value.ngayBinhLuan}</h3>
                                                <p>{value.noiDung}</p>
                                            </div>
                                        ))
                                    }
                                    <Grid myClass={style.them_binh_luan} checkWide={false}>
                                        <Row>
                                            <Col pc={12} table={12} mobie={12}>
                                                <label htmlFor="">Danh gia cua ban:</label>
                                                <div className={style.list_star}>
                                                    <span className={star === 1 ? style.choose_star : ""} onClick={() => setStar(1)}><FaStar /></span>
                                                    <span className={star === 2 ? style.choose_star : ""} onClick={() => setStar(2)}><FaStar /><FaStar /></span>
                                                    <span className={star === 3 ? style.choose_star : ""} onClick={() => setStar(3)}><FaStar /><FaStar /><FaStar /></span>
                                                    <span className={star === 4 ? style.choose_star : ""} onClick={() => setStar(4)}><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                    <span className={star === 5 ? style.choose_star : ""} onClick={() => setStar(5)}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row myClass='mg_t20'>
                                            <Col pc={12} table={12} mobie={12}>
                                                <label htmlFor="">Nhan xet cua ban:</label>
                                                <textarea className={style.cho_noi_dung} placeholder='Nhap noi dung...' onChange={(e) => setNoiDung(e.target.value)} type="email" value={noiDung} />
                                            </Col>
                                        </Row>

                                        <Row myClass='mg_t20'>
                                            <Col pc={6} table={6} mobie={12}>
                                                <label htmlFor="">Ten cua ban:</label>
                                                <input placeholder='Nhap ten...' onChange={(e) => setTen(e.target.value)} type="text" value={ten} />
                                            </Col>

                                            <Col pc={6} table={6} mobie={12}>
                                                <label htmlFor="">Email cua ban:</label>
                                                <input placeholder='Nhap email...' onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col myClass='mg_t20 mg_bt40' pc={12} table={12} mobie={12}>
                                                <button className={style.gui_di} onClick={postBinhLuan}>Them Binh Luan</button>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                        }
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default ProductBottom;