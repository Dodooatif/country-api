import useCountries from "../hooks/useCountries"
import Card from "../components/Card"
import Loading from "../components/Loading"
import Error from "../components/Error"
import React, { useState, useMemo} from "react"
import { Link} from "react-router-dom"
import Select from "react-select"
import countryList from "react-select-country-list"
import numbersWithComma from "../utils/numbersWithComma"

function Countries() {
    const url = "https://restcountries.eu/rest/v2/all"
    const {countries, isPending, error} = useCountries(url)
    const [value, setValue] = useState()
    const options = useMemo(() => countryList().getData, [])
    const changeHandler = value => {
        setValue(value)}
    return (
        <section className="bg-info" style={{ height: "100vh"}}>
            <div className="container">
            <h1>List of Countries</h1>
            <Select options={options} value={value} onChange={changeHandler}>
                <Link to="/Details/:name">Details</Link>
            </Select>
        <div className="row text-center">
            {isPending && <Loading/>}
            {error && <Error/>}
            {countries &&
            countries.map((country) => (
                <Card name={country.name}
                img={country.flag}
                population={numbersWithComma(country.population)}
                 />
            ))}

        </div>
        </div>
        </section>
        
    )
}
export default Countries;