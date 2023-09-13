import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const APIKEY = process.env.apiKey;

function Random() {


  const [gif, setGif] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading,setLoading ] = useState();
  async function fetechData() {
    setLoading(true)
    const url =
      "https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyA2w96obPESzfYOlDrl_VSe1LZCpF7mWm0&client_key=my_test_app&limit=8";
    const data = await axios.get(url);
    console.log(data, "datatatt");
    const image = data.data.results[currentIndex].media_formats.gif.url;
    console.log(image);
    setGif(image);
    setLoading(false)
  }
  useEffect(() => {
    fetechData();
  }, []);

  function clickHandler() {
    return (
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 8 ),
      fetechData(),
      console.log("onclickhandler called  ")
    );
  }

  return (
    <div>
      <h1>Generate</h1>

      {
        loading ? (<Spinner/>) : ( <img src={gif} width="450" />)
      }
     
      <br></br>
      <button onClick={clickHandler}>Next</button>
    </div>
  );
}

export default Random;
