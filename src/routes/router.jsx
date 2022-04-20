import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import SideBar from "../components/SideBar.jsx";
import Grammer from "../pages/Grammer.jsx";
import Story from "../pages/Story.jsx";
import Idioms from "../pages/Idioms.jsx";
import Vocabulary from "../pages/Vocabulary.jsx";
import GamesTests from "../pages/GamesTests.jsx";
import GeneralKnowledge from "../pages/GeneralKnowledge.jsx";
import MusicVideo from "../pages/MusicVideo.jsx";
import Post from "../components/Post.jsx";
import Write from "../pages/Write.jsx";
import Blog from "../pages/Blog.jsx";
import Beginner from "../pages/Beginner.jsx";
import BodyIdioms from "../pages/BodyIdioms.jsx";
// import Footer from "../components/Footer.jsx";

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
        <Route path="/grammer/beginner" element={<Beginner />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/story" element={<Story />} />
        <Route path="/idioms&expressions" element={<Idioms />} />
        <Route path="/idioms/body" element={<BodyIdioms />} />
        <Route path="/games&tests" element={<GamesTests />} />
        <Route path="/generalknowledge" element={<GeneralKnowledge />} />
        <Route path="/music&video" element={<MusicVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
