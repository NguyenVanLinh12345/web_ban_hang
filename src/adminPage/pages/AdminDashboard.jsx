import { useEffect, useState } from 'react';
import style from './AdminDashboard.module.scss';

function AdminDashboard() {

    const [danhMuc, setDanhMuc] = useState("");
    const [danhSachDanhMuc, setDanhSachDanhMuc] = useState([]);

    // const postNhanVien = () => {

    //     const data = {
    //         tenNhanVien: 'Nguyen Van A',
    //         ngaySinh: '1995-01-01',
    //         chucVu: 'Nhan vien',
    //         email: 'nguyenvana@gmail.com',
    //         matkhau: 'password',
    //         soCCCD: '123456789',
    //         queQuan: 'Ha Noi'
    //     };

    //     fetch('http://localhost:8080/nhanvien', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             alert("Thanh Cong");
    //         })
    //         .catch(error => {
    //             console.error('There was an error!', error);
    //         });
    // }

    const themDanhMuc = ()=>{
        const data = {
            tenDanhMuc: danhMuc
        };

        fetch('http://localhost:8080/danhmuc', {
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
                setDanhMuc("");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    useEffect(()=>{
        fetch('http://localhost:8080/danhmuc')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setDanhSachDanhMuc(data);
                    console.log(data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
    }, [])

    return (
        <div className={style.AdminDashboard}>
            <div className={style.container}>
                <input type="text" value={danhMuc} onChange={(e)=>setDanhMuc(e.target.value)}/>
                <button onClick={themDanhMuc}>Them Danh Muc</button>
            </div> 

            <table>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Ten Danh Muc</td>
                    </tr>

                    {
                        danhSachDanhMuc.map((value) => (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.tenDanhMuc}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default AdminDashboard;