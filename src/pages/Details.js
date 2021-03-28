import Error from "../components/Error"
import Loading from "../components/Loading"
import useCountries from "../hooks/useCountries"


function Details({match}) {
    const name = match.params.name;

    const {error, isPending, countries} = useCountries(
        `https://restcountries.eu/rest/v2/name/${name}`);
    return (
        <section className="bg-info" style={{ height: "100vh"}}>
            <div className ="container" style={{color:"white"}}>
        <h1>Details Page</h1>
        <div>
            {isPending && <Loading/>}
            {error && <Error/>}
            {countries &&
            countries.map((country, index) => (
                <div className="row" key={index}>
                    <img src={country.flag}
                    style={{height:200, width:"auto"}}
                    alt={country.name} />
                <div className="m-3">
                    <h2>country: {country.name}</h2>
                    <h2>continent: {country.region}</h2>
                    <h2>population: {country.population}</h2>
                    <h2>Capital city: {country.capital}</h2>
                </div>
                </div>
            ))}
            </div>
            </div>
        </section>
        
    )
}
export default Details;