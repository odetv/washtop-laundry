import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHandler from "./components/PageHandler";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LandingPage from "./pages/LandingPage";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="*" element={<PageHandler />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/daftar" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
