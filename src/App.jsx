import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CorouselMini from "./components/CorouselMini";
import Carousel from "./components/Carousel";
import text from "./data/text.json";

function App() {
  const slides = [
    "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
  ];

  return (
    <>
      <Navbar />
      <Header />
      <CorouselMini />
      <Carousel>
        {[
          ...slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={slide}
                className="w-full max-h-[500px] object-cover"
                alt={`Slide ${index}`}
              />
            </div>
          )),
        ]}
      </Carousel>
      {/* <Carousel /> */}
    </>
  );
}

export default App;
