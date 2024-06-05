
import { Route, Routes } from 'react-router';
import './App.css';
import MyBookshelfPage from './Pages/MyBookshelfPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Mybookshelf" element={<MyBookshelfPage />} />
     </Routes>
    </div>
  );
}

export default App;
