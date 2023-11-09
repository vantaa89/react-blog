import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap";
import MarkdownRenderer from './components/MarkdownRenderer.js';
import Axios from 'axios'

import './style.css'

import mainIntroPath from '../contents/main.md';
import cvPath from '../contents/cv.md';

const Header = (props) => {
  const pages = [{link: '/', name: 'Home'}, {link: '/post', name: 'Posts'}, {link: '/about', name: 'About Me'}];

  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container">
        <a className="navbar-brand"><a style={{fontWeight: 600}}>Seojune</a> Lee</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {pages.map((item, idx) => 
              <li className="nav-item">
                <a className={"nav-link"}
                  aria-current="page" href={item.link}>{item.name}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Footer = () => {
  return (
    <>
      <nav className="footer">
        <p id="footer-text" style={{textAlign: 'center'}}>© Copyright 2023 Seojune Lee</p>
      </nav>
    </>
  );
}

const HomePage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const timeOut = 5000;
    Axios.get(mainIntroPath, {timeOut})
    .then((response) => setMarkdown(response.data));
  }, []);

  return (
    <div id="intro">
      <h1>Hello!</h1>
      <div class="row">
        <div class="col-md-7">
          <MarkdownRenderer markdown={markdown} />
        </div>
        <div class="col-md-3">
          <img src="https://placeholder.co/300x200/" alt="my profile picture" />
        </div>
      </div>
    </div>
  );
};

const CurriculumVitae = () => {
  const [cvMarkdown, setCVMarkdown] = useState('');

  useEffect(() => {
    const timeOut = 5000;
    Axios.get(cvPath, {timeOut})
    .then((response) => setCVMarkdown(response.data));
  }, []);

  return (
    <div>
      <h1 id="cv-title">Seojune Lee (이서준)</h1>
      <MarkdownRenderer markdown={cvMarkdown}/>
    </div>
  );
}

const Posts = () => {
  return (
    <>
      <h1>Posts</h1>
      <p>This is the post page</p>
    </>
  )
}

const App = () => {
  return(
    <>
      <Header/>
      <div className="container">
        <BrowserRouter>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post" element={<Posts />} />
              <Route path="/about" element={<CurriculumVitae />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App;
