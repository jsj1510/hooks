import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange };
}

function useFatch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async() => {
      try {
        const { data } = await Axios.get(url);
        setPayload(data);
      } catch {
        setError("err!");
      } finally {
        setLoading(false);
      }
    };
    
    useEffect(() => {
      callUrl();
    }, []);

    retrun { payload, loading, error };
  }
  

function App() {
  const name = useInput("");
  return (
    <div className="App">
      <h1>use </h1>
      <br />
      <input {...name} placeholder="name" />
      <br />
      {loading && <span>loading </span>}
      {loading && error &&  <span>{error} </span>}
      {loading && payload && <img src={payload.file} width="150" /> }
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
