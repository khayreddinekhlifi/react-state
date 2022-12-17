import React, { useState } from "react";

export default function Modal({ person }) {
  const [show, setshow] = useState(false);

  return (
    <div>
      <button onClick={() => setshow(true)}>ON/OFF</button>
      {show && (
        <div className="modal-bg">
          <div className="modal-cont">
            {" "}
            <button onClick={() => setshow(false)}>x</button>
            <h4> my name: {person.fullname}</h4>
            <h5> bio :{person.bio}</h5>
            <p>my profession is: {person.profession} </p>
          </div>
        </div>
      )}
    </div>
  );
}
