import Pizza from "../../assets/pizza.jpg";
import "./Home.scss";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <img src={Pizza} alt="pizza" />
        <h2>
          Pizzaria <span>La</span> Favorita
        </h2>
        <span className="additional-text">
          Kvalitetsmat och fantastiska smaker
        </span>
      </div>
    </section>
  );
};

export default Home;
