import Hero from "/src/components/Hero";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import Tomasina from "./pages/Tomasina";
import Candygram from "./pages/Candygram";
import { Route, Routes } from "@solidjs/router";

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
    </>
  );
}

export default App;