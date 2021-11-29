import TopBar from "./components/topBar/topBar";
import SideBar from "./components/sideBar/sideBar";
import Home from "./components/pages/home/home";
import "./App.css";
import Footer from "./components/pages/footer/footer";

function App() {
  return (
    <div>
      <TopBar />
      <div class="container">
        <SideBar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
