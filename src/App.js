import React from "react";
import Nav from "../src/components/Nav";
import { Outlet, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import SearchPage from "./Pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
    //<Footer /> 는 생략
  );
};

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}
