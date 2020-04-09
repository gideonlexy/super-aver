import React from 'react';

//styles
import './NewsPreview.css';
import { News } from '../news/News';

const NewsPreview = () => {
  return (
    <div className="preview">
      <News />
    </div>
  );
};

export default NewsPreview;
