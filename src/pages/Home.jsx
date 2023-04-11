import { Fragment } from "react";
import Grid from '../component/Grid/Grid';
import Col from '../component/Grid/Col';
import Row from '../component/Grid/Row';
function Home() {
    
   
    return (
        <Fragment>
            <Grid>
                <Row myClass="pd_t40">
                    <Col pc={3} table={0} mobie={0}>

                    </Col>
                    <Col pc={9} table={12} mobie={12}>

                    </Col>
                </Row>

                <Row myClass="pd_t40 pd_bt40">
                    <Col pc={3} table={0} mobie={0}>

                    </Col>
                    <Col pc={9} table={12} mobie={12}>

                    </Col>
                </Row>
            </Grid>
        </Fragment>
    );
}

export default Home;