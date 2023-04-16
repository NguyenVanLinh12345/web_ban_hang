import { Fragment } from "react";
import Grid from '../component/Grid/Grid';
import Col from '../component/Grid/Col';
import Row from '../component/Grid/Row';
import Category from "../component/homeComponent/Category";
import ColInner from "../component/homeComponent/ColInner";
import MainSlide from "../component/homeComponent/MainSlide";
function Home() {


    return (
        <Fragment>
            <Grid>
                <Row myClass="pd_t40">
                    <Col pc={3} table={0} mobie={0}>
                        <Category />
                    </Col>
                    <Col pc={9} table={12} mobie={12}>
                        <MainSlide />
                    </Col>
                </Row>

                <Row myClass="pd_t40 pd_bt40">
                    <Col pc={3} table={0} mobie={0}>
                        <ColInner />
                    </Col>
                    <Col pc={9} table={12} mobie={12}>

                    </Col>
                </Row>
            </Grid>
        </Fragment>
    );
}

export default Home;