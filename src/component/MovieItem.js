import React, { Component } from "react";

export default class MovieItem extends Component {
    render() {
        return (
            <div
                className="card ml-5"
                style={{ width: "18rem", height: "25rem" }}
            >
                <img
                    className="card-img-top"
                    src={this.props.movieItem.image}
                    alt={this.props.movieItem.image}
                />
                <div className="card-body">
                    <h5
                        className="card-title"
                        style={{
                            fontFamily: "Rampart One",
                            fontSize: "25px",
                            color: "rgb(276,1,71)",
                        }}
                    >
                        {this.props.movieItem.movieName}
                    </h5>
                    <p className="card-text">
                        {this.props.movieItem.description.length > 100 ? (
                            <p>
                                {this.props.movieItem.description.substr(
                                    0,
                                    100
                                )}{" "}
                                ...
                            </p>
                        ) : (
                            <p>{this.props.movieItem.description} </p>
                        )}
                    </p>
                </div>
            </div>
        );
    }
}
