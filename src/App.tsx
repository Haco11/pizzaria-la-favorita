import "./App.scss";
import ArrowUp from "./components/ArrowUp/ArrowUp";
import Home from "./components/Home/Home";
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
        <ArrowUp />
        <Menu />
      </main>
    </>
  );
}

export default App;
