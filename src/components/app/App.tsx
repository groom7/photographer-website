import React from "react";
import { Route, Routes } from "react-router-dom";
// import styles from "./App.module.css";
import Layout from "../layout/Layout";
import MainPage from "../../pages/main-page/MainPage";
import Contact from "../../pages/contact/Contact";
import NotFoundComponent from "../NotFound/NotFoundComponent";
import PublicationsPage from "../../pages/publications-page/PublicationsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<MainPage />} />
        <Route index path="/publications" element={<PublicationsPage />} />
        <Route index path="/archive" element={<MainPage />} />
        <Route index path="/contact" element={<Contact />} />
        {/* <Route index path="/about" element={<MainPage />} /> */}
        <Route path="*" element={<NotFoundComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
