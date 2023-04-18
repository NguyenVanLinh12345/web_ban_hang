import style from './HomeListItem.module.scss';
import HomeItem from './HomeItem';
import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import { useState } from 'react';

const imgProduct = "https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg"
function HomeListItem({ title, danhsach, options }) {
    danhsach = [
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
        { name: "San phm demo", imgUrl: imgProduct, price: 123456 },
    ];
    options = [
        { id: 1, name: "But Viet" },
        { id: 2, name: "But Viet" },
        { id: 3, name: "But Viet" },
        { id: 4, name: "But Viet" },
    ];
    const [mainOption, setMainOption] = useState(1);
    function callAPI(choice) {
        setMainOption(choice.id);
        // console.log(choice);
    }

    return (
        <div className={style.home_list_item}>
            {
                title
                    ? <h1 className={style.title}>{title}</h1>
                    : ""
            }
            <ul className={style.options}>
                {
                    options.map(value => (
                        <li key={value.id} className={`${style.option} ${value.id === mainOption ? style.color_pink : ""}`} onClick={() => callAPI(value)}>{value.name}</li>
                    ))
                }
            </ul>
            <Grid checkWide={false}>
                <Row>
                    {
                        danhsach.map((value, index) => (
                            <Col key={index} pc={4} table={6} mobie={12}>
                                <HomeItem name={value.name} imgUrl={value.imgUrl} price={value.price} />
                            </Col>
                        ))
                    }
                </Row>
            </Grid>
        </div>
    )
}

export default HomeListItem;