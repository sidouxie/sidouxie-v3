// import React from "react";
// import { BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

import RoutesPage from "./RoutesPage";

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

function App() {
  return <RoutesPage />;
}

export default App;
