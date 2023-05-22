import { useParams } from "react-router-dom";

import Grid from '../component/Grid/Grid';
import Col from '../component/Grid/Col';
import Row from '../component/Grid/Row';
import ProductsListItem from "../component/productsComponent/ProductsListItem";
// import ProductsControl from "../component/productsComponent/ProductsControl";
import ProducsLeftSide from "../component/productsComponent/ProductsLeftSide";
import { useEffect, useState } from "react";
function Products() {

    const [danhsach, setDanhSach] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/sanpham/search?ten=${id}`)
                .then(response => response.json())
                .then(data => {
                    // Xử lý dữ liệu trả về ở đây
                    setDanhSach(data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
        else {
            fetch(`http://localhost:8080/sanpham`)
                .then(response => response.json())
                .then(data => {
                    // Xử lý dữ liệu trả về ở đây
                    setDanhSach(data)
                })
                .catch(error => {
                    console.error(error);
                });
        };

    }, [id]);
    return (
        <div className="products">
            <Grid myClass="mg_t40">
                {/* <Row>
                    <Col myClass="" pc={12} table={12} mobie={12}>
                        <ProductsControl numberResult={10}/>
                    </Col>
                </Row> */}
                <Row>
                    <Col myClass="" pc={3} table={3} mobie={0}>
                        <ProducsLeftSide setDanhSach={setDanhSach}/>
                    </Col>
                    <Col myClass="" pc={9} table={9} mobie={12}>
                        <ProductsListItem danhsach={danhsach} />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Products;