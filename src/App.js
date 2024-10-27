import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Change 'sample' to 'react-router-dom'
import Home from './Components/Home';
import Posts from './Components/Posts';
import PostDetail from './Components/PostDetail';
import About from './Components/About'; // Import the About component
import './App.css'; // Import custom CSS

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/posts">Car Models</Link>
        <Link className="nav-link" to="/about">About</Link> {/* Update About link to point to the correct route */}
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
