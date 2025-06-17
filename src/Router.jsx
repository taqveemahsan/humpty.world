import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Scss/App.scss';
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Page/Home';
import StoryBook from './Page/StoryBook';
function NotFound() {
  return <div className='pagenotfound'><h2><span>404 </span>- Page Not Found</h2></div>;
}
function Router() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/StoryBook" element={<StoryBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;