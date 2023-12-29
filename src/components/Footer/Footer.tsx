import "./Footer.scss";
import UberEats from "../../assets/uber.png";
import Foodora from "../../assets/foodora.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <div className="company-info">
            <h4>Pizzaria La Favorita</h4>
            <p>Adress: Bäckvägen 104, Hägersten</p>
            <p>Telefon: 08-645 30 40</p>
          </div>
        </div>

        <div className="right">
          <div className="opening-hours">
            <h4>Öppeningstider</h4>
            <p>Alla dagar: 10:00 - 21:00</p>
          </div>
        </div>
      </div>
      <div className="copyrgiht--contianer">
        <div className="line"></div>
        <div className="copyrgiht--contianer--divide">
          <div className="copyright">
            <p>© 2023 Pizzaria La Favorita.</p>
          </div>

          <div className="social-links">
            <a href="https://www.ubereats.com/se/store/pizzeria-la-favorita/JNb9aK5rToqB2ROMFY1WFA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlYlQzMlQTRzdGVydG9ycCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUo3XzQ4R0ZaMlgwWVJvVFZCMUp0VkYyRSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E1OS4yOTEyMTM3OTk5OTk5OSUyQyUyMmxvbmdpdHVkZSUyMiUzQTE3Ljk3MTI2NDMlN0Q%3D&utm_campaign=place-action-link&utm_medium=organic&utm_source=google">
              <img src={UberEats} alt="" />
            </a>
            <a href="https://www.foodora.se/restaurant/v0bf/la-favorita-v0bf">
              <img src={Foodora} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
