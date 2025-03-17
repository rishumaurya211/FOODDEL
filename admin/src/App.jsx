import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";

import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";

const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
