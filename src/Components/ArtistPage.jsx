import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Topbar from "./TopbarPage";

const ArtistPage = () => {
  const params = useParams();
  const [artist, setArtist] = useState();

  const artistFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setArtist(data.data);
      } else {
        console.log("artist error");
      }
    } catch (err) {
      console.log("artist error");
    }
  };

  useEffect(() => {
    artistFetch();
  }, []);

  console.log("artist params", params);

  console.log("artist data:", artist);

  return (
    <Container fluid sm={12} md={9} lg={4} className="offset-md-3" id="mP">
      <Topbar />
      <Row>
        <Col sm={12} md={10} lg={8} xl={4} className="mt-5">
          <h2 className="titleMain">{params.id}</h2>
          <div id="follow"></div>
          <div id="button-container">
            <button
              className="btn btn-success mr-2 m-btn d-none"
              id="playButton"
            >
              PLAY
            </button>
            <button
              className="btn btn-outline-light m-btn d-none"
              id="followButton"
            >
              FOLLOW
            </button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Container fluid sm={12} md={10} lg={8} xl={4} className="p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-light font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5 ">
            <div id="apiLoaded" className="d-flex flex-wrap">
              {artist &&
                artist.map((e) => (
                  <div sm={3} className="m-1">
                    <Link>
                      <img key={e?.id} src={e?.album.cover} alt="Cover" />
                    </Link>
                    <div className="p-2 fs-0">
                      <Link
                        className="text-decoration-none text-light"
                        to={`/album/${e?.album.id}`}
                      >
                        <p style={{ fontSize: "10px" }}>
                          Album: {e?.album.title}
                        </p>
                      </Link>
                      <Link
                        className="text-decoration-none text-light"
                        to={`/artist/${e?.artist.name}`}
                      >
                        <p style={{ fontSize: "10px" }}>
                          Track: {e?.title_short}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </Row>
    </Container>
  );
};

export default ArtistPage;
