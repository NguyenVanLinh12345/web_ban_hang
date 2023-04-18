import style from './ProductsListItem.module.scss';
import ProductsItem from './ProductsItem';
import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

const imgProduct = "https://znews-photo.zingcdn.me/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg"
function ProductsListItem({ title, danhsach }) {
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

    return (
        <div className={style.products_list_item}>
            {
                title
                    ? <h1 className={style.title}>{title}</h1>
                    : ""
            }
            <Grid checkWide={false}>
                <Row>
                    {
                        danhsach.map((value, index) => (
                            <Col key={index} pc={3} table={4} mobie={6}>
                                <ProductsItem name={value.name} imgUrl={value.imgUrl} price={value.price} />
                            </Col>
                        ))
                    }
                </Row>
            </Grid>
        </div>
    )
}

export default ProductsListItem;