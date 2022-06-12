import Hero from "./components/Hero";
import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];
  return (
    <div className="App">
      <NavBar navbarLinks={navbarLinks} />
      <Hero ImageSrc={travel_01} />
      <Slider
        ImageSrc={travel_02}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        ImageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;
