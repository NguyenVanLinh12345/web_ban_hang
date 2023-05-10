import Grid from "../component/Grid/Grid"
import Col from "../component/Grid/Col"
import Row from "../component/Grid/Row"

function News() {

    return (
        <Grid>
            <Row>
                <Col pc={3} table={4} mobie={0}>
                    tin tuc
                </Col>
                <Col pc={9} table={8} mobie={12}>
                </Col>
            </Row>
        </Grid>
    )
}

export default News;