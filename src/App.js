import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Card from "./Components/Card";
import data from "./data";
// import Test from "./Components/Test";
function App() {
  const cards = data.map((el) => {
    return <Card key={el.id} el={el} />;
  });
  return (
    <div>
      <Navbar />
      <Experience />
      <Cards>{cards}</Cards>
    </div>
  );
}

export default App;
