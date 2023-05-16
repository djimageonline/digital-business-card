import About from "./About";
import "./App.css";
import Info from "./Info";
import Interests from "./Interests";
import Footer from "./Footer";

function App() {
  return (
    <div className="main-container">
      <div className="card-container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
