export default function Card(props) {
  const {
    id,
    title,
    description,
    price,
    coverImg,
    stats: { rating, reviewCount },
    location,
    openSpots,
  } = props.el;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img
        className="card-img"
        alt="Card"
        src={process.env.PUBLIC_URL + `/img/` + coverImg}
      />
      {badgeText && (
        <div className="status">
          <p className="status-text">{badgeText}</p>
        </div>
      )}
      <div className="description--div">
        <p className="card-desc stars">
          ⭐ {rating.toFixed(1) + " "}
          <span className="grey-span">
            ({reviewCount}) {location}
          </span>
        </p>
        <p className="card-desc name">{title}</p>
        <p className="card-desc price">
          <span className="bold-span">From ${price} </span> / person
        </p>
      </div>
    </div>
  );
}
