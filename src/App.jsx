/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Service from "./components/UI/Service";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Service></Service>
        <Portfolio />
        <Contact />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
