import style from './Header.module.css';

import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import ImageSearch from './ImageSear';
import TextSearch from './TextSearch';
import UserInfo from '../userInfo/UserInfo';

import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import background from '../../asets/img/background.jpg';
import logo from '../../asets/img/logo.png';
import { arr1, arr2 } from './link';
import { Fragment, useState } from 'react';

const urlImageSearch = "https://bantranh.com/wp-content/uploads/2019/04/tranh-ve-nui1-582x400.jpg";
function Header({ login }) {

    const [checkLogin, setCheckLogin] = login;

    const[openCart, setOpenCart] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);
    const [searchByImg, setSearchByImg] = useState(false);
    const [searching, setSearching] = useState(false);
    const [urlImage, setUrlImage] = useState(urlImageSearch);

    const logout = ()=>{
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <Fragment>
            <header>
                <div className={style.top_bar}>
                    <Grid>
                        <Row>
                            <Col pc={12} table={0} mobie={0}>
                                {
                                    arr1.map((value, index) => (
                                        <a className={style.link} key={index} href={value.method + value.url}><span className='mg_r8'>{value.icon}</span>{value.name}</a>
                                    ))
                                }
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className={style.masthead} style={{ backgroundImage: `url(${background})` }}>
                    <Grid>
                        <div className={style.thanh_tieu_de}>

                            <img className={style.logo} src={logo} alt="logo" />
                            {
                                checkLogin
                                    ?
                                    <ul className={style.thanh_tieu_de_ul}>
                                        <li onClick={()=>setOpenCart(true)} className={style.thanh_tieu_de_li}>Thông tin</li>
                                        <li onClick={logout} className={style.thanh_tieu_de_li}>Đăng xuất</li>
                                        <li className={style.thanh_tieu_de_li}>
                                            <Link to={'./cart'}><AiOutlineShoppingCart /></Link>
                                        </li>
                                    </ul>
                                    :
                                    <btn onClick={() => setCheckLogin(true)} className={style.dang_nhap}>Đăng nhập</btn>
                            }

                            <span className={style.thanh_tieu_de_btn} onClick={() => setOpenSearch(true)}><HiOutlineMagnifyingGlass style={{ fontSize: "3.2rem" }} /></span>
                        </div>
                    </Grid>
                </div>

                <Grid>
                    <div className={style.nav}>
                        <ul>
                            {
                                arr2.map((value, index) => (
                                    <Link key={index} to={value.url} className={style.nav_top_link}>{value.name}</Link>
                                ))
                            }
                        </ul>
                    </div>
                </Grid>

                {
                    openSearch
                        ? <div className={`${style.search} flex space_around flex_wrap`}>
                            <TextSearch urlImage={urlImage} setUrlImage={setUrlImage} setIsSearching={setSearching} openImg={setSearchByImg} />
                            {searchByImg ? <ImageSearch searching={searching} url={urlImage} /> : ""}
                            <span onClick={() => setOpenSearch(false)} className={style.search_close}><MdOutlineClose style={{ fontSize: "3.2rem", color: "white" }} /></span>
                        </div>
                        : ""
                }

            </header>
            {
                openCart
                    ?
                    <UserInfo closeCartFunc={()=>setOpenCart(false)}/>
                    :
                    ""
            }
        </Fragment>
    )
}

export default Header;