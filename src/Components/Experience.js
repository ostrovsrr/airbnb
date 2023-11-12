export default function Experience() {
  return (
    <section className="experience--section">
      <img
        className="experience--photo"
        src={process.env.PUBLIC_URL + "/img/photos.png"}
        alt="Experience Photos"
      />
      <h1 className="experience--title">Online Experiences</h1>
      <p className="experience--description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
