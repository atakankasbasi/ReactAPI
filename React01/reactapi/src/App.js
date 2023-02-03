import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './Components/ImageList';

function App() {
  const [Images, setImages] = useState([])
  const handleSubmit= async (term) =>{
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceholder={Images}/>
    </div>
  );
}

export default App;
