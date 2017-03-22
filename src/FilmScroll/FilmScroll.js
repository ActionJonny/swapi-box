import React from 'react';

const FilmScroll = ({ film }) => {
  return (
    <div className="film-scroll">
      <p>{ film.opening_crawl }</p>
      <p>{ film.title }</p>
      <p>{ film.release_date }</p>
    </div>
  );
}

FilmScroll.propTypes = {
  film: React.PropTypes.object.isRequired
}


export default FilmScroll;
