import React, { Component } from 'react';


const FilmScroll = ({ film }) => {
  return (
    <div className="FilmScroll">
      { film.opening_crawl }
    </div>
  );
}


export default FilmScroll;
