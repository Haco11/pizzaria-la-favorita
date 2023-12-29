import "./Footer.scss";

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

        <div className="copyright">
          <p>© 2023 Pizzaria La Favorita.</p>
        </div>

        <div className="social-links">
          {/* Add your social media icons/links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
