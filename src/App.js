import "./App.css";
import React, { useState } from "react";
import Modal from "./component/Modal";
export default function App() {
  const [person, setPerson] = useState({
    fullname: "khayri",
    bio: " three years as web developper",
    img: "https://www.shutterstock.com/image-vector/vector-line-icon-img-260nw-2050481222.jpg",
    profession: "doctor",
  });

  return (
    <div>
      <Modal person={person} />
    </div>
  );
}
