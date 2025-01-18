import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import DetailCard from "./components/newdetailCard/detailCard";

const cards_info = [
  {
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title 1",
    subTitle: "sub_title1",
    price: 121,
    id : 21,
  },
  {
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title 2",
    subTitle: "sub_title2",
    price: 121,
    id : 22,
  },
  {
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title 3",
    subTitle: "sub_title3",
    price: 121,
    id : 23,
  },
  {
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title 4",
    subTitle: "sub_title4",
    price: 121,
    id : 24,
  },
  {
    image:
      "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "title 5",
    subTitle: "sub_title5",
    price: 121,
    id : 25,
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/collection/:id" element={<DetailCard products={cards_info}/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
