import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";

// NavBar
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import Write from "../pages/Write.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Post from "../components/Post.jsx";

// SideBar
import SideBar from "../components/SideBar.jsx";
import Grammer from "../pages/Grammer.jsx";
import Story from "../pages/Story.jsx";
import IdiomsExpressions from "../pages/IdiomsExpressions.jsx";
import Vocabulary from "../pages/Vocabulary.jsx";
import GamesTests from "../pages/GamesTests.jsx";
import GeneralKnowledge from "../pages/GeneralKnowledge.jsx";
import MusicVideo from "../pages/MusicVideo.jsx";
import BodyIdioms from "../pages/BodyIdioms.jsx";

import Beginner from "../pages/Beginner.jsx";

import { GrammerContext } from "../context/GrammerContext.jsx";
import { VocabularyContext } from "../context/VocabularyContext.jsx";
import { StoryContext } from "../context/StoryContext.jsx";
import { IdiomsContext } from "../context/IdiomsContext.jsx";
import { GamesTestsContext } from "../context/GamesTestsContext.jsx";
import { GeneralKnowContext } from "../context/GeneralKnowContext.jsx";
import { MusicVideoContext } from "../context/MusicVideoContext.jsx";
// import Footer from "../components/Footer.jsx";

const Router = () => {
  const [grammer, setGrammer] = useState([]);
  const [vocab, setVocab] = useState([]);
  const [story, setStory] = useState([]);
  const [idioms, setIdioms] = useState([]);
  const [games, setGames] = useState([]);
  const [general, setGeneral] = useState([]);
  const [music, setMusic] = useState([]);

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
      </Routes>

      {/* Grammer */}
      <GrammerContext.Provider value={{ grammer, setGrammer }}>
        <Routes>
          <Route path="/grammer" element={<Grammer />} />
          <Route path="/grammer/beginner" element={<Beginner />} />
        </Routes>
      </GrammerContext.Provider>

      {/* Vocabulary */}
      <VocabularyContext.Provider value={{ vocab, setVocab }}>
        <Routes>
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
      </VocabularyContext.Provider>

      {/* Story */}
      <StoryContext.Provider value={{ story, setStory }}>
        <Routes>
          <Route path="/story" element={<Story />} />
        </Routes>
      </StoryContext.Provider>

      {/* Idioms & Expressions */}
      <IdiomsContext.Provider value={{ idioms, setIdioms }}>
        <Routes>
          <Route path="/idioms&expressions" element={<IdiomsExpressions />} />
          <Route
            path="/idioms&expressions/body-idioms"
            element={<BodyIdioms />}
          />
        </Routes>
      </IdiomsContext.Provider>

      {/* Games & Tests */}
      <GamesTestsContext.Provider value={{ games, setGames }}>
        <Routes>
          <Route path="/games&tests" element={<GamesTests />} />
        </Routes>
      </GamesTestsContext.Provider>

      {/* General Knowledge */}
      <GeneralKnowContext.Provider value={{ general, setGeneral }}>
        <Routes>
          <Route path="/generalknowledge" element={<GeneralKnowledge />} />
        </Routes>
      </GeneralKnowContext.Provider>

      {/* Music & Video */}
      <MusicVideoContext.Provider value={{ music, setMusic }}>
        <Routes>
          <Route path="/music&video" element={<MusicVideo />} />
        </Routes>
      </MusicVideoContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
