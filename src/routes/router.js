import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.js";
import Home from "../components/Home.js";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import SideBar from "../components/SideBar.js";
import Grammer from "../components/Grammer.js";
import Story from "../components/Story.js";
import Idioms from "../components/Idioms.js";
import Vocabulary from "../components/Vocabulary.js";
import GamesTests from "../components/GamesTests.js";
import GeneralKnowledge from "../components/GeneralKnowledge.js";
import MusicVideo from "../components/MusicVideo.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
