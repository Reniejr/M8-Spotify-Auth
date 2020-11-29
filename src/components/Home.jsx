import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Home.css";
import Gallery from "./Gallery";

export class Home extends Component {
  state = {
    beyonceAlbums: [],
    maxCooperAlbums: [],
    cakeAlbums: [],
    // selectedMovieID: null,
    comments: [],
    isModalOpen: false,
    selectedAlbumId: null,
    loading: true,
    error: false,
    urls: [
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=beyonce",
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=max%20cooper",
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=cake",
    ],
  };

  handleSelectedAlbum = (id) => {
    console.log("selected album id changed", id);
    this.setState({ selectedAlbumId: id });
  };


  fetchAlbums = async () => {
    const response = await Promise.all(
      this.state.urls.map(async url => {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        });
        return response.json();
      })
    );
    setTimeout(() => {
      this.setState({
        beyonceAlbums: response[0].data,
        maxCooperAlbums: response[1].data,
        cakeAlbums: response[2].data,
        loading: false,
      });
    }, 750);
    console.log(response);
  };

  // fetchComments = async id => {
  //   console.log("fetch", id);

  //   const url = "https://striveschool-api.herokuapp.com/api/comments/";

  //   let response = await fetch(url + id, {
  //     headers: new Headers({
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmUzNTk4MzViMDAwMTc1ODRlZWQiLCJpYXQiOjE2MDU4MjA1NjUsImV4cCI6MTYwNzAzMDE2NX0.mgz_c-3UHAribI3ogIYDAyR7XqpT7ZWCzSPHwrhU19w",
  //     }),
  //   });

  //   let comments = await response.json();

  //   this.setState({ comments }, () =>
  //     console.log("awaited comments", this.state.comments)
  //   );
  // };

  // handleOpenModal = imdbID => {
  //   this.setState({ isModalOpen: true, selectedMovieID: imdbID });
  //   this.fetchComments(imdbID);
  // };

  // handleCloseModal = () => {
  //   this.setState({ isModalOpen: false });
  // };

  componentDidMount() {
    this.fetchAlbums();
  }

  render() {
    return (
      <section className="home-body">
        <div className="main-content d-flex flex-column">
          <div className="justify-content-center">
            <div>
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="trending-tab"
                    data-toggle="tab"
                    href="#trending"
                    role="tab"
                    aria-controls="trending"
                    aria-selected="true"
                    data-target="#homepage-headings"
                    data-slide-to="0"
                  >
                    TRENDING
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="podcast-tab"
                    data-toggle="tab"
                    href="#podcast"
                    role="tab"
                    aria-controls="podcast"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="1"
                  >
                    PODCAST
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="moods-and-genres-tab"
                    data-toggle="tab"
                    href="#moods-and-genres"
                    role="tab"
                    aria-controls="moods-and-genres"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="2"
                  >
                    MOODS AND GENRES
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex " role="presentation">
                  <a
                    className="nav-link"
                    id="new-releases-tab"
                    data-toggle="tab"
                    href="#new-releases"
                    role="tab"
                    aria-controls="new-releases"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="2"
                  >
                    NEW RELEASES
                  </a>
                </li>
                <li className="nav-item d-none d-md-flex" role="presentation">
                  <a
                    className="nav-link"
                    id="discover-tab"
                    data-toggle="tab"
                    href="#discover"
                    role="tab"
                    aria-controls="discover"
                    aria-selected="false"
                    data-target="#homepage-headings"
                    data-slide-to="2"
                  >
                    DISCOVER
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {this.state.error && (
            <Alert variant="danger" className="text-center">
              An error has occurred, please try again later
            </Alert>
          )}
{!this.state.error &&
            (this.props.searchedAlbums.length > 0 ||
              this.props.searchedLoading === true) && (
              <Gallery
                title="Search Results"
                loading={this.props.searchedLoading}
                Albums={this.props.searchedAlbums}
                comments={this.state.comments}
                // fetchComments={this.fetchComments}
                // handleOpenModal={this.handleOpenModal}
                // selectedAlbumId={this.handleSelectedAlbum}
              />
            )}
{!this.state.error &&
            (!this.props.searchedAlbums.length > 0 ||
              this.props.searchedLoading === null) && (
              <>
            <Gallery
              title="Beyonce"
              loading={this.state.loading}
              Albums={this.state.beyonceAlbums.slice(0, 6)}
              comments={this.state.comments}
              // fetchComments={this.fetchComments}
              // handleOpenModal={this.handleOpenModal}
              // selectedAlbumId={this.handleSelectedAlbum}
            />
            <Gallery
              title="Max Cooper"
              loading={this.state.loading}
              Albums={this.state.maxCooperAlbums.slice(0, 6)}
              comments={this.state.comments}
              // fetchComments={this.fetchComments}
              // handleOpenModal={this.handleOpenModal}
              // selectedAlbumId={this.handleSelectedAlbum}
            />
            <Gallery
              title="Cake"
              loading={this.state.loading}
              Albums={this.state.cakeAlbums.slice(0, 6)}
              comments={this.state.comments}
              // fetchComments={this.fetchComments}
              // handleOpenModal={this.handleOpenModal}
              // selectedAlbumId={this.handleSelectedAlbum}
            />
          </>
              )}
        </div>
      </section>
    );
  }
}

export default Home;
