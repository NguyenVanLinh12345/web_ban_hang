<<<<<<< HEAD
import style from './Header.module.css';

import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import ImageSearch from './ImageSear';
import TextSearch from './TextSearch';
import { MdOutlineClose } from 'react-icons/md'

import background from '../../asets/img/background.jpg';
import logo from '../../asets/img/logo.png';
import { arr1, arr2 } from './link';
import { useState } from 'react';

const urlImageSearch = "https://bantranh.com/wp-content/uploads/2019/04/tranh-ve-nui1-582x400.jpg";
function Header() {

    const [openSearch, setOpenSearch] = useState(false);
    const [searchByImg, setSearchByImg] = useState(false);
    const [searching, setSearching] = useState(false);
    const [urlImage, setUrlImage] = useState(urlImageSearch);

    return (
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
                    <img className={style.logo} src={logo} alt="logo" />
                </Grid>
            </div>

            <Grid>
                <div className={style.nav}>
                    <ul>
                        {
                            arr2.map((value, index) => (
                                <a key={index} href={value.url} className={style.nav_top_link}>{value.name}</a>
                            ))
                        }
                    </ul>
                </div>
            </Grid>

            {
                openSearch
                    ? <div className={`${style.search} flex space_around flex_wrap`}>
                        <TextSearch urlImage={urlImage} setUrlImage={setUrlImage} setIsSearching={setSearching} openImg={setSearchByImg} />
                        { searchByImg ? <ImageSearch searching={searching} url={urlImage} /> : ""}
                        <span onClick={() => setOpenSearch(false)} className={style.search_close}><MdOutlineClose style={{ fontSize: "3.2rem", color: "white" }} /></span>
                    </div>
                    : ""
            }
        </header>
    )
}

=======
import style from './Header.module.css';

import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import ImageSearch from './ImageSear';
import TextSearch from './TextSearch';
import { MdOutlineClose } from 'react-icons/md'

import background from '../../asets/img/background.jpg';
import logo from '../../asets/img/logo.png';
import { arr1, arr2 } from './link';
import { useState } from 'react';

const urlImageSearch = "https://bantranh.com/wp-content/uploads/2019/04/tranh-ve-nui1-582x400.jpg";
function Header() {

    const [openSearch, setOpenSearch] = useState(false);
    const [searchByImg, setSearchByImg] = useState(false);
    const [searching, setSearching] = useState(false);
    const [urlImage, setUrlImage] = useState(urlImageSearch);

    return (
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
                    <img className={style.logo} src={logo} alt="logo" />
                </Grid>
            </div>

            <Grid>
                <div className={style.nav}>
                    <ul>
                        {
                            arr2.map((value, index) => (
                                <a key={index} href={value.url} className={style.nav_top_link}>{value.name}</a>
                            ))
                        }
                    </ul>
                </div>
            </Grid>

            {
                openSearch
                    ? <div className={`${style.search} flex space_around flex_wrap`}>
                        <TextSearch urlImage={urlImage} setUrlImage={setUrlImage} setIsSearching={setSearching} openImg={setSearchByImg} />
                        { searchByImg ? <ImageSearch searching={searching} url={urlImage} /> : ""}
                        <span onClick={() => setOpenSearch(false)} className={style.search_close}><MdOutlineClose style={{ fontSize: "3.2rem", color: "white" }} /></span>
                    </div>
                    : ""
            }
        </header>
    )
}

>>>>>>> 49645612789691bcb586d9a3a0b43e0a2cc3aed6
export default Header;