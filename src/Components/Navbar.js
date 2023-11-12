export default function Navbar() {
  return (
    <nav className="nav--section">
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/img/airbnb.png"}
        alt="airbnb-logo"
      ></img>
    </nav>
  );
}
