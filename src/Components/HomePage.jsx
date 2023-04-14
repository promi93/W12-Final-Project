import { useSelector } from "react-redux";

import SingleSong from "./SingleSong";
import { Container, Row, Col } from "react-bootstrap";
import TopbarPage from "./TopbarPage";

const HomePage = () => {
  const rockClassic = useSelector((state) => state.redBasic.rockClassic);
  const popCulture = useSelector((state) => state.redBasic.popCulture);
  const hipHop = useSelector((state) => state.redBasic.hipHop);

  return (
    <>
      <Container sm={12} md={9} className="offset-md-3 mainPage">
        <TopbarPage />
        <Row>
          <Col sm={10}>
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <Row sm={1} md={2} lg={3} xl={4} className="py-3 img-link"></Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div id="Rock">
              <h2>Rock Classic</h2>
              <Row
                sm={1}
                md={2}
                lg={3}
                xl={4}
                className="img-link py-3"
                id="rockSection"
              >
                {rockClassic.map((e, i) => (
                  <SingleSong element={rockClassic[i]} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div id="pop">
              <h2>Pop Culture</h2>
              <Row
                sm={1}
                md={2}
                lg={3}
                xl={4}
                className="img-link py-3"
                id="popSection"
              >
                {popCulture?.map((e, i) => (
                  <SingleSong element={popCulture[i]} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div id="hiphop">
              <h2>Hip Hop</h2>
              <Row
                sm={1}
                md={2}
                lg={3}
                xl={4}
                className="img-link py-3"
                id="hipHopSection"
              >
                {hipHop?.map((e, i) => (
                  <SingleSong element={hipHop[i]} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
