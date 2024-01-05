import { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";
const WeatherApp = () => {
    const [data,setData]=useState({})
    const[location,setLocation]=useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=bd71368d40ad56d5d7bfde7a616f7f26`;

   const searchData =()=>{
    if(event.key ==="Enter"){
        axios.get(url)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
            
        })
    }
   
   }
  return (
    <div>
      <div className="main font-semibold">
        <div className="search">
              <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchData}
          placeholder='Enter Location'
          type="text" 
          className="p-2 w-[300px]"/>
        </div>
        <div className="max-w-[700px] mx-auto px-4 relative  flex justify-between flex-col border h-[85%]">
          <div className=" w-[100%] mx-4">
            <div className="location">
              <p className="text-2xl">{data.name}</p>
            </div>
              <div>
                <h1 className="text-5xl">{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</h1>
              </div>
              <div className="mt-10 description">
                <p className="text-2xl ">  {data.weather ? <p>{data.weather[0].main}</p> : null}</p>
              </div>
          </div>
          <div className="bottom flex justify-evenly my-4 p-4 text-center rounded-xl bg-[#ffffff33] ">
            <div className="feels">
              <p className="text-2xl font-semibold">60C</p>
              <p>
                Feels Like
              </p>
            </div>
            <div className="humidity">
              <p className="text-2xl font-semibolds">20%</p>
              <p>Humidity</p>
            </div>
            <div >
                <p className="font-semibold text-2xl">12MPH</p>
                <p>Wind</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;