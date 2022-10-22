import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./Component/Filter";
import Show from "./Component/Show";
import Countryinfo from "./Component/countryinfo";

const App =()=> {
  const [country, setcountry] = useState([])
  const [searchcountry, setsearchcountry] = useState('')

  useEffect(() =>{
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response =>{
      setcountry(response.data)
    })
  },[])

  const handlesearch =(event)=>{
    setsearchcountry(event.target.value)
    const regex =new RegExp(searchcountry, 'i');
    const exsit = country.filter(p => p.name.common.match(regex));
    setcountry(exsit)
  }
  const handleindex = () => {
    return(
      <div>
        <Countryinfo country={country[0]}/>
      </div>
    )
  }

  return(
    <div>
      <Filter text={'Find countries'} value={searchcountry} handlefunction={handlesearch} />
      <Show country={country} setcountry={setcountry} />
    </div>
  )
}

export default App;
