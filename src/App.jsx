import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap";
import './style.css'
import MarkdownRenderer from './components/MarkdownRenderer.js';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid container">
        <a class="navbar-brand"><a style={{fontWeight: 600}}>Seojune</a> Lee</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="post">Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about">About Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


const HomePage = () => {
  return (
    <div id="main-content">
      <h1>Hello!</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <MarkdownRenderer/>
    </div>
  );
}

const CurriculumVitae = () => {
  return (
    <div id="main-content">
      <h1>This is the CV Page</h1>
      <p>CV</p>
    </div>
  );
}

const PostPage = () => {

}

const App = () => {
  return(
    <>
      <NavBar/>
      <div className="container">
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostPage />} />
              <Route path="/about" element={<CurriculumVitae />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
