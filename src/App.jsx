import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2
import "./App.css";
import Home from './layout/home';
import Meeting from "./layout/meeting";
import About from './layout/about';

const NotFoundPage = () => {
  const navigate = useNavigate(); // useNavigate hook inside the component within Router context

  React.useEffect(() => {
    Swal.fire({
      title: 'Page Not Found',
      text: 'Contact the dev for more information.',
      icon: 'error',
      confirmButtonText: 'Okay',
    }).then(() => {
      // Navigate to home after "Okay" is clicked
      navigate('/');
    });
  }, [navigate]);

  return null; // This component does not need to render anything
};

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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
