import "./App.scss";
import ArrowUp from "./components/ArrowUp/ArrowUp";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Menu from "./components/Menu/Menu";
import Nav from "./components/Nav/Nav";

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
    </>
  );
}

export default App;
