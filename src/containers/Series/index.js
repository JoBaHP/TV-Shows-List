import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFeatching: false,
  };

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value, isFeatching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json, isFeatching: false }));
  };

  render() {
    const { series, seriesName, isFeatching } = this.state;
    return (
      <div>
        Number of TV Shows founded = {this.state.series.length}
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFeatching && series.length === 0 && seriesName.trim() === "" && (
          <p>Please type TV Show name!</p>
        )}
        {!isFeatching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No TV Shows have been found...</p>
        )}
        {isFeatching && <Loader />}
        <SeriesList list={this.state.series} />
      </div>
    );
  }
}

export default Series;
