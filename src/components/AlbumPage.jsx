import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faEllipsisH,
  faHeart,
  faPauseCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./CSS/AlbumPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Alert } from "react-bootstrap";

export class AlbumPage extends Component {
  state = {
    album: {},
    tracks: [],
    loading: true,
    error: false,
  };
  fetchAlbum = async () => {
    let albumID = this.props.match.params.id;
    console.log(albumID);
    try {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/album/" + albumID,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let album = await response.json();
      console.log("album", album);

      if (response.ok) {
        album.tracks = album.tracks.data;
        console.log("tracks", album.tracks);

        this.setState({
          album: album,
          tracks: album.tracks,
        });
      } else {
        this.setState({ loading: false, error: true });
        <Alert variant="danger">Something went wrong!</Alert>;
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: true });
    }
  };

  componentDidMount = () => {
    this.fetchAlbum();
  };

  render() {

    return (
      <>
        <div className="row">
          <div className="albums-holder col-9" style={{ padding: "0px" }}>
            <section style={{ overflowY: "auto" }} id="albums-section">
              {/* <div className="album-header" id="header">
                <div className="arrow-container">
                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="fas fa-chevron-circle-left fa-2x mr-2"
                  />
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    className="fas fa-chevron-circle-right fa-2x"
                  />
                </div>

                <div className="header-btns">
                  <a href="#">
                    <button
                      className="upgrade-btn"
                      value="upgrade"
                      style={{ verticalAlign: "middle" }}
                    >
                      UPGRADE
                    </button>
                  </a>

                  <div className="dropdown">
                    <button
                      className="profile-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="user-icon">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="fas fa-user"
                        />
                      </span>
                      User
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{ background: "black", color: "white" }}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        style={{ background: "black", color: "white" }}
                        href="#"
                      >
                        Acount
                      </a>
                      <a
                        className="dropdown-item"
                        style={{ background: "black", color: "white" }}
                        href="#"
                      >
                        Profile
                      </a>
                      <a
                        href="login.html"
                        className="dropdown-item"
                        style={{ background: "black", color: "white" }}
                        href="#"
                      >
                        Log-out
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="album mt-5 row">
                <div className="col-12 col-md-6 col-lg-4">
                  <Image
                    className="album-cover img-fluid"
                    src= {this.state.cover_big}
                    alt="album cover"
                  />
                </div>

                <div className="album-details col-12 col-md-6 col-lg-8">
                  <h4 className="mt-2">albums</h4>
                  <h2 id="albumName"> {this.state.album.title}</h2>
                  <div className="mt-4 last-line">
                    <img
                      // src={this.state.artist.picture}
                      alt="artist's photo"
                      className="group-img"
                    />
                    <h6>
                      <a href="./artist-page.html" className="group-name">
                        {this.state.album.artist.name}
                      </a>
                    </h6>
                    <p className="album-length">2018 • {this.state.album.nb_tracks}, {this.state.album.duration}</p>
                  </div>
                </div>
              </div>

              <div className="playlist">
                <div className="playlist-btns mt-3 mb-3">
                  <FontAwesomeIcon
                    icon={faPauseCircle}
                    className="fas fa-pause-circle fa-3x"
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="far fa-heart fa-2x mr-3 ml-3"
                  />
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="fa fa-ellipsis-h fa-2x"
                  />
                </div>
                <div className="playlist-table">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col th-sm">
                          <span># </span>
                        </th>
                        <th scope="col th-lg" style={{ paddingLeft: "50px" }}>
                          Title
                        </th>
                        <th scope="col th-sm">
                          <i className="far fa-clock"></i>
                        </th>
                        <div
                          style={{
                            borderBottom: "1px solid #b3b3b3",
                            width: "90%",
                          }}
                        ></div>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">1 </span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            onclick="printInnerText()"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">20th Centry Fox Fanfare</li>
                            <li
                              className="group"
                              style={{ verticalAlign: "middle" }}
                            >
                              Queen
                            </li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          0:25
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">2 </span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song" id="song">
                              Somebody to love - 2011 MIX
                            </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          4:55
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">3 </span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">
                              Doing All Right - ...Revisited
                            </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          3:16
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">4 </span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">
                              Keep Yourself Alive - Live At The Rainbow
                            </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          3:56
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">5</span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">Killer Queen - 2011 Mix</li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          2:58
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">6 </span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">
                              Bohemian Rhapsody - 2011 Mix
                            </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          5:54
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">7</span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">
                              Love Of My Life - Live At Rock In Rio
                            </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          4:28
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">8</span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">
                              We Will Rock You - Movie Mix
                            </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          2:09
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">9</span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">Another One Bites The Dust</li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          3:34
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">10</span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">I Want To Break Free </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          3:43
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                      <tr className="songRow">
                        <th scope="row" style={{ verticalAlign: "middle" }}>
                          <span className="track-num">11</span>
                          <img
                            src="https://img.icons8.com/android/16/b3b3b3/play.png"
                            className="track-play play-track-btn"
                          />
                        </th>
                        <td>
                          <ul>
                            <li className="song">
                              Bohemian Rhapsody - Live Aid
                            </li>
                            <li className="group">Queen</li>
                          </ul>
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <img
                            src="https://img.icons8.com/ios/15/b3b3b3/like.png"
                            className="track-heart"
                          />
                          2:27
                          <img
                            src="https://img.icons8.com/material/15/b3b3b3/more--v1.png"
                            className="track-dots"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default AlbumPage;
