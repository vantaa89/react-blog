import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap";
import MarkdownRenderer from './components/MarkdownRenderer.js';
import Axios from 'axios'

import './style.css'

import introPath from '../contents/intro.md';
import cvPath from '../contents/cv.md';

const Header = () => {
  const pages = [
    {name: 'Home', link: '/'},
    {name: 'Posts', link: '/posts'},
    {name: 'About Me', link: '/about'},
  ]
  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container">
        <a className="navbar-brand"><a style={{fontWeight: 600}}>Seojune</a> Lee</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {pages.map((item, index) => {
              return (
                <li key={Date.now()} className="nav-item">
                  <a className="nav-link" href={item.link}>{item.name}</a>
                </li>
              );
            })}
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
    Axios.get(introPath)
    .then((response) => setMarkdown(response.data));
  }, []);

  return (
    <div id="intro" className="row">
      <div className="col-md-7">
        <MarkdownRenderer markdown={markdown} />
      </div>
      <div className="col-md-3">
        <img className="intro-image" src="https://placeholder.co/300x200/"/>
      </div>
    </div>
  );
};

const CurriculumVitae = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    Axios.get(cvPath)
    .then((response) => setMarkdown(response.data));
  }, [])
  return (
    <div className="cv">
      <h1 id="cv-english-name">Seojune Lee</h1>
      <p id="cv-korean-name">이서준</p>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
}

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setPosts(response.data));
  }, []);
  return (
    <>
      <h1 style={{marginBottom: '20px'}}>Post Page</h1>
      {posts.map((v, i) => {
        return (
          <div className="post card" key={i} style={{margin: "10px 0"}}>
            <div className="card-header">
              <h3 className="card-title">{v.title}</h3>
              
            </div>
            <div className="card-body">
              <div className="card-text">{v.body}</div>
              <div className="card-text"><small class="text-muted">Written by user{v.userId} (post id = {v.id})</small></div>
              
            </div>
          </div>
        );
        
      })}
    </>
  );
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
