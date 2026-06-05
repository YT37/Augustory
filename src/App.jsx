import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Audience from "./pages/Audience.jsx";
import About from "./pages/About.jsx";
import Ventures from "./pages/Ventures.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./styles/components.css";
import "./styles/pages.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporates" element={<Audience slug="corporates" />} />
          <Route path="/universities" element={<Audience slug="universities" />} />
          <Route path="/entrepreneurs" element={<Audience slug="entrepreneurs" />} />
          <Route path="/investors" element={<Audience slug="investors" />} />
          <Route path="/professionals" element={<Audience slug="professionals" />} />
          <Route path="/about" element={<About />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
