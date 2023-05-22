import { useState } from 'react';
import style from './AdminEmployes.module.scss';
import { useEffect } from 'react';

function AdminEmployes() {
    const [dsNhanVien, setDsNhnVien] = useState([]);

    const [tenNhanVien, setTen] = useState("");
    const [ngaySinh, setNgaySinh] = useState("");
    const [chucVu, setChhucVu] = useState("");
    const [email, setEmail] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [soCCCD, setSoCCC] = useState("");
    const [queQun, setQue] = useState("");

    const postNhanVien = () => {
        const data = {
            tenNhanVien: 'Nguyen Van A',
            ngaySinh: '1995-01-01',
            chucVu: 'Nhan vien',
            email: 'nguyenvana@gmail.com',
            matkhau: 'password',
            soCCCD: '123456789',
            queQuan: 'Ha Noi'
        };

        fetch('http://localhost:8080/nhanvien', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
    };
    useEffect(()=>{
        fetch('http://localhost:8080/nhanvien')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setDsNhnVien(data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []) 

    return (
        <div className={style.AdminEmployes}>

            <table>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Ten nhan vien</td>
                        <td>Ngay sinh</td>
                        <td>Chuc vu</td>
                        <td>email</td>
                        <td>soCCCD</td>
                        <td>Que quan</td>
                    </tr>

                    {
                        dsNhanVien.map((value) => (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.tenNhanVien}</td>
                                <td>{value.ngaySinh}</td>
                                <td>{value.chucVu}</td>
                                <td>{value.email}</td>
                                <td>{value.soCCCD}</td>
                                <td>{value.queQuan}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div>
            <div>
                    <div>
                        <label htmlFor="">Ten:</label>
                        <input type="text" value={tenNhanVien} onChange={(e) => setTen(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Ngay sinh:</label>
                        <input type="date" value={ngaySinh} onChange={(e) => setNgaySinh(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Chuc Vu: </label>
                        <input type="text" value={chucVu} onChange={(e) => setChhucVu(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Mat khau: </label>
                        <input type="password" value={matKhau} onChange={(e) => setMatKhau(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">So CCCD: </label>
                        <input type="number" value={soCCCD} onChange={(e) => setSoCCC(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Que Quan: </label>
                        <input type="text" value={queQun} onChange={(e) => setQue(e.target.value)} />
                    </div>
                </div>
                <button onClick={postNhanVien}>Them Nhan Vien</button>
            </div>
        </div>
    )
}

export default AdminEmployes;