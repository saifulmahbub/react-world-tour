import { useEffect } from "react";
import { useState } from "react";
import Country from "../SingleCountry/Country";
import "./Countries.css";

const Countries = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h3>Country:{country.length}</h3>
      <div className="countries-container">
        {country.map((desh) => (
          <Country key={desh.cca3} output={desh}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
