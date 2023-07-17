import './App.css';
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';
import ImageDetail from './ImageDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
  return <ImageList />;
}

function UploadPage() {
  return <ImageUpload />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/images/:id" element={<ImageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
