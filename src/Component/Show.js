import Countryinfo from "./countryinfo";
const Show = ({country, setcountry}) =>{
    if (country.length > 10){
        return (
            <div>
                <p>Too many matches, specift another filter</p>
            </div>
        )
    }
    else if (country.length > 2 && country.length <8)
    {
        return(
            <div>
                {country.map((p,i) => <p key={i}>{p.name.common} <button onClick={() => setcountry([p])}>show</button></p>)}
            </div>
        )
    }
    else if (country.length === 1){
        return (
            <div>
                <Countryinfo country={country[0]} />
            </div>
        )
    }
}
export default Show