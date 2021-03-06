import React, { Component } from "react";
import Loader from "../../components/Loader";

class SingleShow extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((response) => response.json())
      .then((json) => this.setState({ show: json }));
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>Premiered - {show.premiered}</p>
            <p>Rating - {show.rating.average}</p>
            <p>Episodes - {show._embedded.episodes.length}</p>
            <p>
              <img src={show.image.medium} alt="Show" />
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleShow;
