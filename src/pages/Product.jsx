import { useParams } from 'react-router-dom';

import ProductMain from '../component/productComponent/ProductMain';
import ProductBottom from '../component/productComponent/ProductBottom';
import { Fragment, useEffect, useState } from 'react';

function Product() {

    const { id } = useParams(); 
    const [dataP, setDataP] = useState({anhDaiDien: "", gia: 0, ngayDangBan: "", soLuong: 0, tenSanPham:"", moTa: ""});

    useEffect(()=>{
        fetch(`http://localhost:8080/sanpham/product?id=${id}`)
        .then(response => response.json())
        .then(data => {
            setDataP(data);
        })
        .catch(error => {
            console.error(error);
        });
    }, [id]);

    return (
        <Fragment>
            <ProductMain 
            anhDaiDien={dataP.anhDaiDien} 
            gia={dataP.gia} 
            giamGia={0}
            ngayDangBan={dataP.ngayDangBan}
            soLuong={dataP.soLuong}
            tenSanPham={dataP.tenSanPham}
            ></ProductMain>

        <ProductBottom idSanPham={dataP.id} moTa={dataP.moTa}/>
        </Fragment>

    )
}

export default Product;