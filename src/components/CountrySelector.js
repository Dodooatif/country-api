import { useState } from "react";
import useCountries from "../hooks/useCountries";
import Details from "../pages/Details";

const CountrySelector = () => {
  const { stats: countries, error, loading } = useCountries(
    "https://restcountries.eu/rest/v2/all"
  );
  const [selctedCountry, setSelectedCountry] = useState("GH");

  if (loading) return <h1>please wait ...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <>
      <div className="form-container">
        <h2> Country: </h2>
        <select
          value={`${selctedCountry}`}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countries.countries.map((country) => (
            <option value={`${countries}`} key={`${countries}`}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <Details
        url={`https://restcountries.eu/rest/v2/all/${selctedCountry}`}
      ></Details>
    </>
  );
};

export default CountrySelector;
