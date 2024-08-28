import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Explore from "./components/Explore";
import LandingPage from "./components/LandingPage";
import Scroller from "./components/Scroller";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Stats from "./components/Stats";
import Solution from "./components/Solution";
import Path from "./components/Path";
import Dubai from "./components/Dubai";
import Signup from "./components/Signup";
import SellerSignup from "./components/SellerSignup";
import ChoicePage from "./components/ChoicePage";
import StartJourney from "./components/StartJourney";
import Footer from "./components/Footer";
import Login from "./components/Login";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "body",
      { backgroundColor: "white" },
      {
        backgroundColor: "#222221",
        scrollTrigger: {
          trigger: ".scroller-section",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      "body",
      { backgroundColor: "#222221" },
      {
        backgroundColor: "white",
        scrollTrigger: {
          trigger: ".scroller-section1",
          start: "top 50%",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "body",
      { backgroundColor: "white" },
      {
        backgroundColor: "#252525",
        scrollTrigger: {
          trigger: ".solution",
          start: "top 50%",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "body",
      { backgroundColor: "#252525" },
      {
        backgroundColor: "white",
        scrollTrigger: {
          trigger: ".dubai",
          start: "top 30%",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden">
              <LandingPage />
              <div className="scroller-section">
                <Scroller />
              </div>
              <Explore className="explore-page" />
              <div className="scroller-section1">
                <Stats />
              </div>
              <div className="solution">
                <Solution />
              </div>
              <Path />
              <div className="dubai">
                <Dubai />
              </div>
              <div className="start">
                <StartJourney />
              </div>
              <Footer className="footer"/>
            </div>
          }
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SellerSignup" element={<SellerSignup />} />
        <Route path="/Choice" element={<ChoicePage />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
