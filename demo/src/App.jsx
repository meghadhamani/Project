import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css"
import "./components/Netflix.module.css"
const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of some Netflix series</h1>
      <NetflixSeries />
    </section>
  );
};
export default App;


