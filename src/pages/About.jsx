import Grid from "../component/Grid/Grid"
import Col from "../component/Grid/Col"
import Row from "../component/Grid/Row"

import ImgBackground from "../component/ImgBackground";
import urlImage from '../asets/img/background1.jpg';
import { Fragment } from "react";

function About() {

    return (
        <Fragment>
            <ImgBackground title={"Gioi thieu"} ulrImage={urlImage} />

            <Grid>
                <Row>
                    <Col pc={3} table={4} mobie={0}>
                    </Col>
                    <Col pc={9} table={8} mobie={12}>
                    </Col>
                </Row>
            </Grid>
        </Fragment>
    )
}

export default About;