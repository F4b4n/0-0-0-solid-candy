import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import Hero from "/src/components/Hero";
import Header from "./components/Header";

const Navbar = lazy(() => import("./components/Navbar"));
const Intro = lazy(() => import("./pages/Intro"));
const Tomasina = lazy(() => import("./pages/Tomasina"));
const Candygram = lazy(() => import("./pages/Candygram"));
const Facts = lazy(() => import("./components/Facts"));
const Treat = lazy(() => import("./components/Treat"));


function App() {
  return (
    <>
      <Hero />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" component={Intro} />
        <Route path="/Candygram" component={Candygram} />
        <Route path="/Tomasina" component={Tomasina} />
      </Routes>
      <Facts />
      <Treat />
    </>
  );
}

export default App;
