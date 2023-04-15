import { useSelector } from "react-redux";
import next from "../assets/Next.png";
import play from "../assets/Play.png";
import previous from "../assets/Previous.png";
import repeat from "../assets/Repeat.png";
import shuffle from "../assets/Shuffle.png";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const musicPlayer = useSelector((state) => state.redBasic.musicPlayer);
  console.log("musicPlayer", musicPlayer);

  return (
    <Container className="fixed-bottom pt-1" id="bgPlayer">
      <Row>
        <Col lg={3}>
          <div className="text-light d-flex">
            <div className="d-flex flex-column p-1">
              <p>{musicPlayer?.artist?.name}</p>
              <p>{musicPlayer?.title}</p>
            </div>
          </div>
        </Col>
        <Col lg={7}>
          <Row>
            <Col
              sm={6}
              md={4}
              lg={2}
              className="offset-3 offset-md-4 offset-lg-5 mt-1"
              id="playerRemote"
            >
              <Row className="flex-nowrap">
                <a href="alt">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="alt">
                  <img src={previous} alt="previous" />
                </a>
                <a href="alt">
                  <img src={play} alt="play" />
                </a>
                <a href="alt">
                  <img src={next} alt="next" />
                </a>
                <a href="alt">
                  <img src={repeat} alt="reapet" />
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col sm={12} md={8}>
              <div className="progressPlay">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
