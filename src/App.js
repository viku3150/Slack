import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import styled from "styled-components";
import SideBar from "./Components/SideBar";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Routes>
              <Route exact path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
