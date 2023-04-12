import style from './Footer.module.css';
import Slide from './Slide';
import Item from './Item';
import ImageItem from './ImageItem';
import ContactItem from './ContactItem';
import Grid from "../Grid/Grid";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

import { VscBook } from "react-icons/vsc";
import { arr1, arr2, arr3, arr4, arr5 } from './link';
import logo from '../../asets/img/logo.png';
import paymetod from '../../asets/img/pay_method/image-paypal.png';

function Footer() {

    return (
        <footer className={style.footer}>
            <Slide />
            <Grid myClass='pd_t40 pd_bt40'>
                <Row>
                    <Col pc={3} table={6} mobie={12}>
                        <img className={style.logo} src={logo} alt="logo" />
                        <div>
                            {
                                arr3.map((value, index) => (
                                    <Item key={index} icon={value.icon} myHref={value.url} name={value.name} myClass='w100' />
                                ))
                            }
                        </div>
                    </Col>
                    <Col pc={3} table={6} mobie={12}>
                        <h3 className={style.title}>SẢN PHẨM BÁN CHẠY</h3>
                        <Grid checkWide={false}>
                            <Row>
                                {
                                    arr4.map((value, index) => (
                                        <Col key={index} pc={4} table={4} mobie={4}>
                                            <ImageItem src={value.url} name={value.name} price={value.price} />
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Grid>
                    </Col>
                    <Col pc={2} table={4} mobie={12}>
                        <div className='mg_l16'>
                            <h3 className={style.title}>MENU</h3>
                            {
                                arr1.map((value, index) => (
                                    <Item key={index} myClass='w100' myHref={value.url} name={value.name} icon={<VscBook style={{ color: "grey", fontSize: "1.4rem" }} />} />
                                ))
                            }
                        </div>
                    </Col>
                    <Col pc={4} table={8} mobie={12}>
                        <h3 className={style.title}>DANH MỤC SẢN PHẨM</h3>
                        <div className='mg_l16'>
                            {
                                arr2.map((value, index) => (
                                    <Item key={index} myClass='w50' myHref={value.url} name={value.name} icon={<VscBook />} />
                                ))
                            }
                        </div>
                    </Col>
                </Row>
                <Row myClass='pd_t40'>
                    <Col pc={3} table={6} mobie={12}>
                        <h2 className={style.title}>KẾT NỐI VỚI CHÚNG TÔI</h2>
                        <div>
                            {arr5.map((value, index)=>(
                                <ContactItem key={index} icon={value.icon} name={value.name} url={value.url}/>
                            ))}
                        </div>
                    </Col>
                    <Col pc={3} table={6} mobie={12}>
                        <h3 className={style.title}>CHẤP NHẬN THANH TOÁN</h3>
                        <img src={paymetod} alt="pay method" />
                    </Col>
                    <Col pc={6} table={12} mobie={12}>
                        <h3 className={style.title}>ĐĂNG KÝ</h3>
                        <Grid checkWide={false}>
                            <Row>
                                <Col pc={6} table={6} mobie={12}>
                                    <span className={style.subscribe}>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</span>
                                </Col>
                                <Col pc={6} table={6} mobie={12}>
                                    <div>
                                        <input placeholder='email...' className={style.subscribe_input} type="text" />
                                        <button className={style.subscribe_btn}>ĐĂNG KÝ</button>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        </footer>
    )
}

export default Footer;



// import style from './Footer.module.css';
// import Slide from './Slide';
// import Item from './Item';
// import ImageItem from './ImageItem';
// import ContactItem from './ContactItem';
// import Grid from "../Grid/Grid";
// import Row from "../Grid/Row";
// import Col from "../Grid/Col";

// import { VscBook } from "react-icons/vsc";
// import { arr1, arr2, arr3, arr4, arr5 } from './link';
// import logo from '../../asets/img/logo.png';
// import paymetod from '../../asets/img/pay_method/image-paypal.png';

// function Footer() {

//     return (
//         <footer className={style.footer}>
//             <Slide />
//             <Grid myClass='pd_t40 pd_bt40'>
//                 <Row>
//                     <Col pc={3} table={6} mobie={12}>
//                         <img className={style.logo} src={logo} alt="logo" />
//                         <div>
//                             {
//                                 arr3.map((value, index) => (
//                                     <Item key={index} icon={value.icon} myHref={value.url} name={value.name} myClass='w100' />
//                                 ))
//                             }
//                         </div>
//                     </Col>
//                     <Col pc={3} table={6} mobie={12}>
//                         <h3 className={style.title}>SẢN PHẨM BÁN CHẠY</h3>
//                         <Grid checkWide={false}>
//                             <Row>
//                                 {
//                                     arr4.map((value, index) => (
//                                         <Col key={index} pc={4} table={4} mobie={4}>
//                                             <ImageItem src={value.url} name={value.name} price={value.price} />
//                                         </Col>
//                                     ))
//                                 }
//                             </Row>
//                         </Grid>
//                     </Col>
//                     <Col pc={2} table={4} mobie={12}>
//                         <div className='mg_l16'>
//                             <h3 className={style.title}>MENU</h3>
//                             {
//                                 arr1.map((value, index) => (
//                                     <Item key={index} myClass='w100' myHref={value.url} name={value.name} icon={<VscBook style={{ color: "grey", fontSize: "1.4rem" }} />} />
//                                 ))
//                             }
//                         </div>
//                     </Col>
//                     <Col pc={4} table={8} mobie={12}>
//                         <h3 className={style.title}>DANH MỤC SẢN PHẨM</h3>
//                         <div className='mg_l16'>
//                             {
//                                 arr2.map((value, index) => (
//                                     <Item key={index} myClass='w50' myHref={value.url} name={value.name} icon={<VscBook />} />
//                                 ))
//                             }
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row myClass='pd_t40'>
//                     <Col pc={3} table={6} mobie={12}>
//                         <h2 className={style.title}>KẾT NỐI VỚI CHÚNG TÔI</h2>
//                         <div>
//                             {arr5.map((value, index)=>(
//                                 <ContactItem key={index} icon={value.icon} name={value.name} url={value.url}/>
//                             ))}
//                         </div>
//                     </Col>
//                     <Col pc={3} table={6} mobie={12}>
//                         <h3 className={style.title}>CHẤP NHẬN THANH TOÁN</h3>
//                         <img src={paymetod} alt="pay method" />
//                     </Col>
//                     <Col pc={6} table={12} mobie={12}>
//                         <h3 className={style.title}>ĐĂNG KÝ</h3>
//                         <Grid checkWide={false}>
//                             <Row>
//                                 <Col pc={6} table={6} mobie={12}>
//                                     <span className={style.subscribe}>Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.</span>
//                                 </Col>
//                                 <Col pc={6} table={6} mobie={12}>
//                                     <div>
//                                         <input placeholder='email...' className={style.subscribe_input} type="text" />
//                                         <button className={style.subscribe_btn}>ĐĂNG KÝ</button>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Grid>
//                     </Col>
//                 </Row>
//             </Grid>
//         </footer>
//     )
// }