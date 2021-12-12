import TopBar from "./components/topBar/topBar";
import SideBar from "./components/sideBar/sideBar";
import Home from "./components/pages/home/home";
import "./App.css";
import Footer from "./components/pages/footer/footer";
import Users from "./components/pages/users/users";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsersEdit from "./components/pages/usersEdit/usersEdit";
import AddUser from "./components/pages/addUser/addUser";
import Products from "./components/pages/products/products";
import ProductEdit from "./components/pages/productEdit/productEdit";

function App() {
  return (
    <Router>
      <TopBar />
      <div class="container">
        <SideBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/newUser" element={<AddUser />} />
          <Route path="/users/:userId" element={<UsersEdit />} />
          <Route path="/products" element={<Products />} />
          <Route path="/newProduct" element={<AddUser />} />
          <Route path="/products/:productId" element={<ProductEdit />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
