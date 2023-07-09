import React, { useEffect, useState }  from "react";
import '../Components/style.css';





const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai")
    const [season, setSeason] = useState(null);

    useEffect( () =>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=89dc676f436ec26cc73ab30161831e5f`
            const response = await fetch(url);

            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
            setSeason(resJson);
        } 
        fetchApi();
    },[search])




    return(
        <>
        <div className="bg">
        <div className="box">
            {/* <h1>Hello hros</h1> */}
            <div className="input">
                <input
                type="search"
                className="inputField"
                value={search}
                onChange={(event)=> { setSearch(event.target.value) } } />
            </div>
            {
                !city || !season ? (
                    <p> No Data Found </p>
                ):(
                    <div>
                        <br/>
                    <div className="info">
                        <h2 className="location">
                        {season.name},{season.sys.country}</h2>
                        <h1 className="temp">{city.temp}°Cel</h1>
                        <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                        <h5 className="weather" >Weather: {season.weather[0].description}</h5>
                    </div> 
                    </div>
                )
            }
           <div></div>
        </div>
        </div>
        </>
    )
}

export default TempApp;






