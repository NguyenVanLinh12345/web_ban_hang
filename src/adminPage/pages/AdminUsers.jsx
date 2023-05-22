import { useEffect, useState } from 'react';
import style from './AdminUsers.module.scss';

function AdminUsers(){
    const [dsNguoiDung, setDSNguoiDung] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8080/khach')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setDSNguoiDung(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []) 
    return(
        <div className={style.AdminUsers}>
            <table>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Ten khach</td>
                        <td>email</td>
                        <td>So dien thoai</td>
                        <td>Dia Chi</td>
                    </tr>

                    {
                        dsNguoiDung.map((value) => (
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.ten}</td>
                                <td>{value.email}</td>
                                <td>{value.soDienThoai}</td>
                                <td>{value.diaChi}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminUsers;