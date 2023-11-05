import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap";
import MarkdownRenderer from './components/MarkdownRenderer.js';
import Axios from 'axios'

import './style.css'

import textpath from '../contents/main.md';


const Header = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container">
        <a className="navbar-brand"><a style={{fontWeight: 600}}>Seojune</a> Lee</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="post">Posts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">About Me</a>
            </li>
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

import myImage from "../contents/profile_pic.jpg"
const HomePage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    Axios.get(textpath)
    .then((response) => setMarkdown(response.data));
  }, []);

  return (
    <div id="intro">
      {/* <img src={myImage} alt={"my profile pic"} width="70%" /> */}
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
};

const CurriculumVitae = () => {
  return (
    <div>
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
      <Header/>
      <div className="container">
        <BrowserRouter>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostPage />} />
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
