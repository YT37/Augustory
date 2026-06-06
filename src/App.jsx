import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Audience from "./pages/Audience.jsx";
import About from "./pages/About.jsx";
import Ventures from "./pages/Ventures.jsx";
import VentureDetail from "./pages/VentureDetail.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./styles/components.css";
import "./styles/pages.css";

function AnimatedRoutes() {
  const location = useLocation();
  const reduce = useReducedMotion();

  const variants = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
      };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/corporates" element={<Audience slug="corporates" />} />
          <Route path="/universities" element={<Audience slug="universities" />} />
          <Route path="/entrepreneurs" element={<Audience slug="entrepreneurs" />} />
          <Route path="/investors" element={<Audience slug="investors" />} />
          <Route path="/professionals" element={<Audience slug="professionals" />} />
          <Route path="/about" element={<About />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/ventures/:slug" element={<VentureDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}
