/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "./TopbarPage";
import { Row, Col } from "react-bootstrap";

const AlbumPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [album, setAlbum] = useState();
  const [song, setSong] = useState();
  const [likes, setLikes] = useState([]);

  const likedSongs = useSelector((state) => state.redBasic.likedSongs);

  const albumFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setSong(data.tracks.data);
        setAlbum(data);
      } else {
        console.log("album error");
      }
    } catch (err) {
      console.log("album error catch");
    }
  };

  useEffect(() => {
    albumFetch();
  }, []);

  const toggleLike = (songId) => {
    const likedIndex = likedSongs.indexOf(songId);
    if (likedIndex !== -1) {
      const newLikedSongs = likedSongs.filter((id) => id !== songId);
      dispatch({ type: "UPDATE_LIKED_SONGS", payload: newLikedSongs });
    } else {
      const newLikedSongs = [...likedSongs, songId];
      dispatch({ type: "UPDATE_LIKED_SONGS", payload: newLikedSongs });
    }
  };

  return (
    <div sm={12} md={9} lg={4} className="offset-md-3">
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
                  <div
                    key={e.id}
                    class="py-3 trackHover d-flex justify-content-between"
                  >
                    <Link
                      to="#"
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
                      onClick={() => toggleLike(e.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <AiOutlineHeart
                        style={{
                          color: likes.includes(e.id) ? "green" : "white",
                        }}
                        onClick={() => {
                          if (likes.includes(e.id)) {
                            setLikes(likes.filter((id) => id !== e.id));
                          } else {
                            setLikes([...likes, e.id]);
                          }
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
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AlbumPage;
