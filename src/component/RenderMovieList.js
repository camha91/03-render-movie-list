import React, { Component } from "react";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
    renderMovieList = () => {
        return this.props.arrMovie.map((movie, index) => {
            return (
                <div className="col-3 mt-5" key={index}>
                    <MovieItem movieItem={movie} />
                </div>
            );
        });
    };
    render() {
        return (
            <div
                style={{
                    backgroundImage: "url(./background/april.jpg)",
                    minHeight: "2000px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        minHeight: "2000px",
                    }}
                >
                    <nav
                        className="navbar navbar-expand-lg navbar-dark"
                        style={{ backgroundColor: "rgba(238,48,167,0.8)" }}
                    >
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">
                                        Home{" "}
                                    </a>
                                    <span class="sr-only">(current)</span>
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
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
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
                    <div className="container-fluid">
                        <div className="row">{this.renderMovieList()}</div>
                    </div>
                </div>
            </div>
        );
    }
}
