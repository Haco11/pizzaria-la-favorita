import Salad from "../../assets/salad.png";
import Pasta from "../../assets/pasta-icon.png";
import "./Info.scss";
const Info = () => {
  return (
    <section className="info">
      <div className="info--container">
        <div className="cards">
          <img src={Salad} alt="salad-icon" />
          <h3>Sallader</h3>
          <p>
            Salladerna serveras med nybakat bröd & dressing. (Rhode Island,
            vitlökdressing, curry, ceasardressing & vinägrett) Samtliga
            innehåller isbergsallad, tomat & gurka och ruccola
          </p>
        </div>
        <div className="cards">
          <img src={Pasta} alt="pasta-icon" />
          <h3>Pasta</h3>
          <p>Serveras med nybakat bröd.</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
