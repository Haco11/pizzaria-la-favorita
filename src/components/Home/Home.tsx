import Pizza from "../../assets/pizza.jpg";
import "./Home.scss";
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <img src={Pizza} alt="pizza" />
        <h2>Pizzaria La Favorita</h2>
      </div>
    </section>
  );
};

export default Home;
