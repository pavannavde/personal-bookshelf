
import { Route, Routes } from 'react-router';
import './App.css';
import MyBookshelfPage from './Pages/MyBookshelfPage';
import HomePage from './Pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Mybookshelf" element={<MyBookshelfPage />} />
     </Routes>
    </div>
  );
}

export default App;
