import React, { useRef, useEffect, createRef } from "react";
import ReactDOM from "react-dom";

function clickOutside(fn) {
  const ref = createRef();
  const handleCkick = (e) => {
    if (ref.current.contains(e.target)) {
      fn();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleCkick);
  }, []);
  return ref;
}

function App() {
  const onClickOutside = () => {
    console.log("aaaa");
  };
  const ref = clickOutside(onClickOutside);
  return (
    <div className="App">
      <div ref={ref}>
        <h1>hi</h1>
      </div>
      <input type="text" />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);