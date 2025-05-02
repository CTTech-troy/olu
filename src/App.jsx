import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './layout/home';
import Meeting from "./layout/meeting";
import About from './layout/about';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />
        
        {/* Meeting route */}
        <Route path="/meeting" element={<Meeting />} />

        <Route path="/about" element={<About />} />
        
        {/* Optional: 404 catch-all route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;