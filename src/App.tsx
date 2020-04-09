import React from 'react';

//styles
import './App.css';

//components
import { Button } from './components/button/Button';
import NewsPreview from './components/news-preview/NewsPreview';

function App() {
  return (
    <div className="App">
      <Button />
      <NewsPreview />
    </div>
  );
}

export default App;
