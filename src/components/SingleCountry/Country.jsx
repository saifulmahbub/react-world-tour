import { useState } from "react";
import "./Country.css";
const Country = ({ output }) => {
  const { capital, name, flags, population } = output;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="clg">
      <h2>Name:{name.common}</h2>
      <h3>Capital:{capital}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <button onClick={handleVisited}>{visited ? "visited" : "must go"}</button>
      {visited ? "i have visited this country" : "i will visit"}
    </div>
  );
};

export default Country;
