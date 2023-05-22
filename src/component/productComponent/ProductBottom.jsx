import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

import style from './ProductBottom.module.scss';
import { useEffect, useState } from 'react';

function ProductBottom({ moTa, idSanPham }) {

    const [danhSachhBinhLuan, setDSBL] = useState([]);

    const [ten, setTen] = useState("");
    const [email, setEmail] = useState("");
    const [noiDung, setNoiDung] = useState("");

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
            .then(data =>{
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


    const [luaChon, setLuaChon] = useState(0);
    return (
        <Grid myClass='mg_bt40'>
            <Row>
                <Col pc={12} table={12} mobie={12}>
                    <button style={{ borderBottom: luaChon === 0 ? "0.2rem solid white" : "none", backgroundColor: luaChon === 0 ? "lightgray" : "white" }} className={style.the_tren} onClick={() => setLuaChon(0)}>Mo ta</button>
                    <button style={{ borderBottom: luaChon === 1 ? "0.2rem solid white" : "none", backgroundColor: luaChon === 1 ? "lightgray" : "white" }} className={style.the_tren} onClick={() => setLuaChon(1)}>Danh Gia</button>
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
                                                <h1>{value.tenNguoiBinhLuan}</h1>
                                                <h3>{value.ngayBinhLuan}</h3>
                                                <p>{value.noiDung}</p>
                                            </div>
                                        ))
                                    }
                                    <div className={style.them_binh_luan} >
                                        <div>
                                            <label htmlFor="">Ten cua ban:</label>
                                            <input placeholder='Nhap ten...' onChange={(e) => setTen(e.target.value)} type="text" value={ten} />
                                        </div>
                                        <div>
                                            <label htmlFor="">Email cua ban:</label>
                                            <input placeholder='Nhap email...' onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
                                        </div>

                                        <div>
                                            <label htmlFor="">Noi Dung:</label>
                                            <input className={style.cho_noi_dung} placeholder='Nhap noi dung...' onChange={(e) => setNoiDung(e.target.value)} type="email" value={noiDung} />
                                        </div>


                                        <button onClick={postBinhLuan}>Them Binh Luan</button>
                                    </div>
                                </div>
                        }
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default ProductBottom;