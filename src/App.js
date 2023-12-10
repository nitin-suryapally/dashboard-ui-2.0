
import { CssBaseline } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";

const App = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content" style={{background : "#c2c1be"}} >
          <Topbar setIsSidebar = {setIsSidebar} />
          <Routes>
            <Route path="/" element = {<Dashboard />} />
            <Route path="/vechical" element = {<Dashboard />} />
            <Route path="/equipment" element = {<Dashboard />} />
            <Route path="/issues" element = {<Dashboard />} />
            <Route path="/remainder" element = {<Dashboard />} />
            <Route path="/services" element = {<Dashboard />} />
            <Route path="/fuel" element = {<Dashboard />} />
            <Route path="/contact & users" element = {<Dashboard />} />
            <Route path="/parts & inventory" element = {<Dashboard />} />
            <Route path="/places" element = {<Dashboard />} />
            <Route path="/reports" element = {<Dashboard />} />
            <Route path="/intigration" element = {<Dashboard />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
