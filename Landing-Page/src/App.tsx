import "./App.css";
import Header from "./components/header";
import Page from "./components/page";
import Footer from "./components/footer";
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
