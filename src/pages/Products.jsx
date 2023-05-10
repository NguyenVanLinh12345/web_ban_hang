import { useParams } from "react-router-dom";

import Grid from '../component/Grid/Grid';
import Col from '../component/Grid/Col';
import Row from '../component/Grid/Row';
import ProductsListItem from "../component/productsComponent/ProductsListItem";
import ProductsControl from "../component/productsComponent/ProductsControl";
import ProducsLeftSide from "../component/productsComponent/ProductsLeftSide";
function Products() {
    let { mainPath, path } = useParams();
    if (mainPath)
        console.log(mainPath);
    if (path)
        console.log(path);
    return (
        <div className="products">
            <Grid>
                <Row>
                    <Col myClass="" pc={12} table={12} mobie={12}>
                        <ProductsControl numberResult={10}/>
                    </Col>
                </Row>
                <Row>
                    <Col myClass="" pc={3} table={3} mobie={0}>
                        <ProducsLeftSide />
                    </Col>
                    <Col myClass="" pc={9} table={9} mobie={12}>
                        <ProductsListItem />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Products;