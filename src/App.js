import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import Gallery from './components/gallery';
import Header from './components/header';

function App() {
  let [images, setImages] = useState([]);
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  
  async function updateImages() {
    const response = await fetch('/data/gallery-pictures.json');
    let data = await response.json();
    console.log(data);
    data = shuffle(data);
    console.log(data);
    data = data.slice(0, 11);
    setImages(data);
  }
  useEffect(() => {
    updateImages();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <div className="container-fluid mx-auto gallery-container">

      <Gallery images={images}></Gallery>
      </div>
    </div>
  );
}

export default App;
