import React, { Component } from "react";
import movieData from "../Data/MovieData.json";

export default class RenderMovieList extends Component {
  renderMovies = () => {
    let contentMovies = movieData.map((movie, index) => {
      return (
        <div classname="col-3" key={index}>
          <div
            className="card text-white bg-success ml-5 mt-2"
            style={{ width: "300px" }}
          >
            <img
              style={{ width: "300px", height: "150px" }}
              className="card-img-top"
              src={movie.image}
              alt={movie.movieName}
            />
            <div className="card-body">
              <h4
                className="card-title text-dark"
                style={{ fontSize: "18px", height: "50px" }}
              >
                {movie.movieName}
              </h4>
              <p
                className="card-text"
                style={{ fontSize: "14px", height: "100px" }}
              >
                {movie.description.length > 100 ? (
                  <p>{movie.description.substr(0, 100)} ...</p>
                ) : (
                  <p>{movie.description}</p>
                )}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return contentMovies;
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./background/april.jpg)",
          minHeight: "2000px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "2000px" }}>
          <nav
            className="navbar navbar-expand-sm navbar-dark"
            style={{ backgroundColor: "rgba(238,48,167,0.8)" }}
          >
            <a className="navbar-brand" href="#">
              Movie List
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <div className="container-fluid mt-5">
            <div className="row">{this.renderMovies()}</div>
          </div>
        </div>
      </div>
    );
  }
}
