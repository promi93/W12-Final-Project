/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const SingleSong = (props) => {
  const [singleSong, setSingleSong] = useState();

  const MainFetch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.element}`
      );
      if (response.ok) {
        const data = await response.json();
        setSingleSong(data.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    MainFetch();
  }, []);

  return (
    <div>
      {singleSong && (
        <Col className="text-center" key={singleSong.id}>
          <Link to={`/album/${singleSong.album.id}`}>
            <img
              className="img-fluid"
              src={singleSong.album?.cover_medium}
              alt="1"
            />
          </Link>
          <p>
            <Link to={`/album/${singleSong.album.id}`}>
              Album:
              {singleSong.album?.title?.length < 16
                ? `${singleSong.album?.title}`
                : `${singleSong.album?.title.substring(0, 16)}...`}
            </Link>

            <br />

            <Link to={`/artist/${singleSong.artist.name}`}>
              Artist: {singleSong.artist?.name}
            </Link>
          </p>
        </Col>
      )}
    </div>
  );
};

export default SingleSong;
