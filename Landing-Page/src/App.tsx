import "./App.css";
import Header from "../src/components/header";
import Page from "../src/components/page";
import Footer from "../src/components/footer";
import Notion from "../src/components/notion";
import Chat from "../src/components/chat";
import Course from "../src/components/course";
import Maps from "../src/components/maps";
import Other from "../src/components/other";
import Final from "../src/components/final";

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
