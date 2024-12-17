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
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Page />
      <Notion />
      <Chat />
      <Course />
      <Footer />
    </>
  );
}

export default App;
