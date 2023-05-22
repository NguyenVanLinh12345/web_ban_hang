import { useState } from 'react';
import style from './AdminProducts.module.scss';
import { useEffect } from 'react';

function AdminProducts() {
    const [dsSanPham, setDsSanPham] = useState([])

    const [ten, setTen] = useState("");
    const [gia, setGia] = useState("");
    const [anhDaiDien, setAnhDaiDien] = useState("");
    const [moTa, setMoTa] = useState("");
    const [danhMucId, setDanhMucId] = useState("");
    const [soLuong, setSoLuong] = useState("");

    const postProduct = () => {
        const data = {
            tenSanPham: ten,
            gia: Number(gia),
            anhDaiDien: anhDaiDien,
            moTa: moTa,
            danhMucId: Number(danhMucId),
            soLuong: Number(soLuong)
        };

        fetch('http://localhost:8080/sanpham', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    useEffect(() => {
        fetch('http://localhost:8080/sanpham')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setDsSanPham(data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [])
    return (
        <div className={style.AdminProducts}>

            <table>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Ten San Pham</td>
                        <td>Gia</td>
                        <td>Mo ta</td>
                        <td>Ngay dang ban</td>
                        <td>So luong</td>
                        <td>Danh muc id</td>
                    </tr>

                    {
                        dsSanPham.map((value) => (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.tenSanPham}</td>
                                <td>{value.gia}</td>
                                <td>{value.moTa}</td>
                                <td>{value.ngayDangBan}</td>
                                <td>{value.soLuong}</td>
                                <td>{value.danhMucId}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div>
                <div>
                    <div>
                        <label htmlFor="">Ten:</label>
                        <input type="text" value={ten} onChange={(e) => setTen(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Gia:</label>
                        <input type="number" value={gia} onChange={(e) => setGia(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Anh dai dien: </label>
                        <input type="text" value={anhDaiDien} onChange={(e) => setAnhDaiDien(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Mo ta: </label>
                        <input type="text" value={moTa} onChange={(e) => setMoTa(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Danh Muc: </label>
                        <input type="number" value={danhMucId} onChange={(e) => setDanhMucId(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">So Luong trong kho: </label>
                        <input type="number" value={soLuong} onChange={(e) => setSoLuong(e.target.value)} />
                    </div>
                </div>
                <button onClick={postProduct}>Them san pham</button>
            </div>
        </div>
    )
}

export default AdminProducts;