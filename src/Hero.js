import React, { useState, useEffect } from "react";
import axios from "axios";

function hero() {
  const [ExcData, setExcData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
      )
      .then((res) => {
        //        console.log(res)
        console.log(res.data[0].name);
        setExcData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <h1>{ExcData !== undefined ? ExcData.data[0].name : "wait"}</h1>
    </div>
  );
}
export default hero;
