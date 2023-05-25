import Grid from "../component/Grid/Grid"
import Col from "../component/Grid/Col"
import Row from "../component/Grid/Row"
import CartItem from '../component/cartComponent/CartItem';
import BoughtItem from "../component/cartComponent/BoughtItem";

let img = "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg";
let danhSach = [
    {
        id: 1,
        anhDaiDien: img,
        tenSanPham: "Ten 1",
        gia: 1200000,
        soLuong: 100
    },
    {
        id: 2,
        anhDaiDien: img,
        tenSanPham: "Ten 1",
        gia: 1200000,
        soLuong: 100
    },
    {
        id: 3,
        anhDaiDien: img,
        tenSanPham: "Ten 1",
        gia: 1200000,
        soLuong: 100
    },
    {
        id: 4,
        anhDaiDien: img,
        tenSanPham: "Ten 1",
        gia: 1200000,
        soLuong: 100
    },
    {
        id: 5,
        anhDaiDien: img,
        tenSanPham: "Ten 5",
        gia: 1200000,
        soLuong: 100
    },
    {
        id: 6,
        anhDaiDien: img,
        tenSanPham: "Ten 6",
        gia: 1200000,
        soLuong: 100
    },
    {
        id: 7,
        anhDaiDien: img,
        tenSanPham: "Ten 7",
        gia: 1200000,
        soLuong: 100
    }
];
function Cart() {

    return (
        <Grid myClass="mg_bt40 font_size20">
            <Row myClass="mg_t40">
                <Col pc={12} table={12} mobie={12}>Giỏ hàng</Col>
            </Row>
            <Row>
                {
                    danhSach.map((value) => (
                        <Col pc={3} table={4} mobie={6}>
                            <CartItem
                                idSanPham={1}
                                anhDaiDien={value.anhDaiDien}
                                tenSanPham={value.tenSanPham}
                                gia={value.gia}
                                soLuong={value.soLuong}
                            />
                        </Col>
                    ))
                }
            </Row>

            <Row myClass="mg_t40 font_size20">
                <Col pc={12} table={12} mobie={12}>Sản phẩm đã mua</Col>
            </Row>
            <Row>
                {
                    danhSach.map((value) => (
                        <Col pc={3} table={4} mobie={6}>
                            <BoughtItem
                                idSanPham={1}
                                anhDaiDien={value.anhDaiDien}
                                tenSanPham={value.tenSanPham}
                                gia={value.gia}
                                soLuong={value.soLuong}
                                ngayMua={"2023-12-12"}
                                trangThai={"Đang vận chuyển"}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Grid>
    )
}

export default Cart;