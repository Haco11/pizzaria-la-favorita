import ArrowUp from "./components/ArrowUp/ArrowUp";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Menu from "./components/Menu/Menu";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Home />
        <Info />
        <ArrowUp />
        <Menu />
      </main>
      <footer>
        <Footer />
      </footer>
      <Analytics />
    </>
  );
}

export default App;
