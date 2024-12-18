import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Notion from "./components/notion";
import Chat from "./components/chat";
import Course from "./components/course";
import Maps from "./components/maps";
import Other from "./components/other";
import Final from "./components/final";

function App() {
  return (
    <>
      <Header />
      <Page />
      <Notion />
      <Course />
      <Maps />
      <Other />
      <Chat />
      <Final />
      <Footer />
    </>
  );
}

export default App;
