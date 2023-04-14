import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopbarPage = () => {
  return (
    <Container>
      <Row>
        <Col sm={9} lg={11} className="d-none d-md-flex" id="m-link">
          <Link to="/404">TRENDING</Link>
          <Link to="/404">PODCAST</Link>
          <Link to="/404">MOODS AND GENRES</Link>
          <Link to="/404">NEW RELEASES</Link>
          <Link to="/404">DISCOVER</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TopbarPage;
