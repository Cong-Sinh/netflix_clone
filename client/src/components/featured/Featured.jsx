import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./Featured.scss";
const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
          </select>
        </div>
      )}
      <img
        className=""
        src="https://image.tmdb.org/t/p/original//1syW9SNna38rSl9fnXwc9fP7POW.jpg"
        alt=""
      />
      <div className="info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Blue_Beetle_%28film%29_logo.png" />
        <span className="desc">lorem</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
