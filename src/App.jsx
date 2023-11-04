import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap";
import './style.css'


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Seojune Lee</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="cv">CV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="post">Posts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const HomePage = () => {
  return (
    <div className="container">
      <NavBar/>
      <div id="main-content">
        <h1>Hello!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

const CurriculumVitae = () => {
  return (
    <div className="container">
      <NavBar/>
      <div id="main-content">
        <h1>This is the CV Page</h1>
        <p>CV</p>  
      </div>
    </div>
  );
}


const App = () => {
  return(
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<CurriculumVitae />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
