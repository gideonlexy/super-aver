import React from 'react';

//styles
import './News.css';

export const News = () => {
  return (
    <>
      <div className="articles">
        <h2 className="title">Title</h2>
        <img className="news-image" alt="Image" />
        <span className="description">Description</span>
      </div>
      <div className="articles">
        <h2 className="title">Title</h2>
        <img className="news-image" alt="Image" />
        <span className="description">Description</span>
      </div>
      <div className="articles">
        <h2 className="title">Title</h2>
        <img className="news-image" alt="Image" />
        <span className="description">Description</span>
      </div>
    </>
  );
};
