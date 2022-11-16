import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Rights from "./components/Rights";
import "./styles/index.css";
import redBall from "./assets/red ball.png";
import purpleBall from "./assets/purple ball.png";
import purpleLight from "./assets/purple light.png";
import redLight from "./assets/red light.png";
function App() {
  return (
    <div className="app">
      <Header />
      <img src={redBall} alt={"red ball"} className={"red-ball"} />
      <img src={redBall} alt={"red ball"} className={"red-ball2"} />

      <img src={purpleBall} alt={"purple ball"} className={"purple-ball"} />
      <img src={purpleLight} alt={"purple light"} className={"purple-light"} />
      <img src={redLight} alt={"red light"} className={"red-light"} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
