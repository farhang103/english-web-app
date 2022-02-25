import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import SideBar from "../components/SideBar.js";
import Grammer from "../pages/Grammer.js";
import Story from "../pages/Story.js";
import Idioms from "../pages/Idioms.js";
import Vocabulary from "../pages/Vocabulary.js";
import GamesTests from "../pages/GamesTests.js";
import GeneralKnowledge from "../pages/GeneralKnowledge.js";
import MusicVideo from "../pages/MusicVideo.js";
import Post from "../components/Post.js";
import Write from "../pages/Write.js";
import Blog from "../pages/Blog.js";
// import Footer from "../components/Footer.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/write" element={<Write />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grammer" element={<Grammer />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/story" element={<Story />} />
        <Route path="/idioms&expressions" element={<Idioms />} />
        <Route path="/games&tests" element={<GamesTests />} />
        <Route path="/general&knowledge" element={<GeneralKnowledge />} />
        <Route path="/music&video" element={<MusicVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
