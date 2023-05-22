import style from './ProductsListItem.module.scss';
import ProductsItem from './ProductsItem';
import Grid from '../Grid/Grid';
import Row from '../Grid/Row';
import Col from '../Grid/Col';

function ProductsListItem({ title, danhsach = []}) {
    
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
                        danhsach.map((value) => (
                            <Col key={value.id} pc={3} table={4} mobie={6}>
                                <ProductsItem to={`/product/${value.id}`} name={value.tenSanPham} imgUrl={value.anhDaiDien} price={value.gia} />
                            </Col>
                        ))
                    }
                </Row>
            </Grid>
        </div>
    )
}

export default ProductsListItem;