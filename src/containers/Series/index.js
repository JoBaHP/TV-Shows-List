import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";
import "./series.css";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFeatching: false,
  };

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value, isFeatching: true });
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json, isFeatching: false }));
  };

  render() {
    const { series, seriesName, isFeatching } = this.state;
    return (
      <div className="column">
        <div>
          <Intro message="Here you can find all TV Shows!" />
          <h5>Number of TV Shows founded: {this.state.series.length}</h5>
        </div>
        <div>
          <form className="form-inline ">
            <input
              value={seriesName}
              className="form-control mr-sm-2 rounded-pill border-end-0 border"
              type="search"
              aria-label="Search"
              onChange={this.onSeriesInputChange}
            />
          </form>
        </div>
        {!isFeatching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please type TV Show name!</p>
        )}
        {!isFeatching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV Shows have been found...</p>
        )}
        {isFeatching && <Loader />}
        <div>
          <SeriesList list={this.state.series} />
        </div>
      </div>
    );
  }
}

export default Series;
