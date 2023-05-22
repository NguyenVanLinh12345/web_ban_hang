import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import ShowPrice from '../globalFunction/ShowPrice';
import payment from "../../asets/img/pay_method/payment.png";

import style from './ProductMain.module.scss';
import { useState } from 'react';

function ProductMain({ tenSanPham, gia, anhDaiDien, ngayDangBan, soLuong, giamGia }) {
 
    const [soLuongMua, setSoLuongMua] = useState(1);
    return (
        <Grid myClass='mg_t40'>
            <Row>
                <Col pc={6} table={6} mobie={12}>
                    <div className={style.anh_dai_dien} style={{ backgroundImage: `url("${anhDaiDien}")` }}></div>
                </Col>
                <Col pc={6} table={6} mobie={12}>
                    <div className={style.tieu_de}>
                        <h1>{tenSanPham}</h1>
                        <h4>{ngayDangBan}</h4>
                        <p className={style.gia_cu}>Gia cu: {ShowPrice(gia)}d</p>
                        <p className={style.gia_moi}>Gia moi: {ShowPrice(gia * (100 - giamGia) / 100)}d</p>

                        <h3>Con lai: {soLuong}</h3>
                    </div>
                    <img className='mg_t40' src={payment} style={{width: "100%"}} alt="payment" />

                    <div className={style.so_luong_mua}>
                        <button
                        onClick={()=>{
                            if(soLuongMua > 1){
                                setSoLuongMua(soLuongMua-1);
                            }
                        }
                        }>-</button>
                        <span>{soLuongMua}</span>
                        <button
                        onClick={()=>{
                            if(soLuongMua < soLuong){
                                setSoLuongMua(soLuongMua+1);
                            }
                        }
                        }>+</button>
                    </div>
                    <button className={style.btn}>Them vao gio hang</button>
                </Col>
            </Row>
        </Grid>
    )
}

export default ProductMain;