import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "./TopbarPage";
import { Row, Col, Container } from "react-bootstrap";

const AlbumPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [album, setAlbum] = useState();
  const [song, setSong] = useState();
  const like = useSelector((state) => state.redBasic.like);

  const AlbumFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setAlbum(data);
        setSong(data.tracks.data);
      } else {
        console.log("album error");
      }
    } catch (err) {
      console.log("album error catch");
    }
  };
  console.log("liked", like);

  useEffect(() => {
    AlbumFetch();
  }, []);

  console.log("album params", params);

  console.log("album data:", album);

  return (
    <Container fluid sm={12} md={9} lg={4} className="offset-md-3 mainPage">
      <Topbar />
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container">
          <img src={album?.cover} class="card-img img-fluid" alt="Album" />
          <div class="mt-4 text-center">
            <p class="album-title">{album?.title}</p>
          </div>
          <div class="text-center">
            <p class="artist-name">{album?.artist.name}</p>
          </div>
          <div class="mt-4 text-center">
            <button id="btnPlay" class="btn btn-success" type="button">
              Play
            </button>
          </div>
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5">
              {song &&
                song.map((e) => (
                  <>
                    <div class="py-3 trackHover d-flex justify-content-between">
                      <Link
                        href="#"
                        className="card-title trackHover px-3 col-10"
                        style={{ color: "white" }}
                        onClick={() =>
                          dispatch({ type: "ADD_TO_PLAYER", payload: e })
                        }
                      >
                        {e?.title}
                      </Link>
                      <p
                        className="col-1"
                        onClick={() =>
                          dispatch({ type: "LIKE", payload: e.id })
                        }
                      >
                        <AiOutlineHeart
                          style={{
                            color: like.map((a) =>
                              a === e.id ? "green" : "white"
                            ),
                          }}
                        />
                      </p>
                      <small
                        className="duration col-1"
                        style={{ color: "white" }}
                      >
                        {Math.floor(parseInt(e?.duration) / 60)}:
                        {parseInt(e?.duration) % 60 < 10
                          ? "0" + (parseInt(e?.duration) % 60)
                          : parseInt(e?.duration) % 60}
                      </small>
                    </div>
                  </>
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumPage;
