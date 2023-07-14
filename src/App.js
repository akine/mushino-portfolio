import './App.css';
import ImageUpload from './ImageUpload';
import ImageList from './ImageList'; // ImageList をインポートします。

function App() {
  return (
    <div className="App">
      <ImageUpload />
      <ImageList />
    </div>
  );
}

export default App;
