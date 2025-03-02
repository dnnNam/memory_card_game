import "./App.scss";
import Cards from "./components/memoryCards/Cards";
import useImages from "./imges";
function App() {
  const images = useImages();

  return <div className="App">{<Cards cards={images} />}</div>;
}

export default App;
