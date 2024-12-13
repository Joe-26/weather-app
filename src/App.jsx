import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [location, setLocation] = useState('')
  const [temp, setTemp] = useState('')
  const [unit, setUnit] = useState('')
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [max_temp, setMaxTemp] = useState(0)
  const [min_temp, setMinTemp] = useState(0)

  const [input_lat, setInputLat] = useState('')
  const [input_long, setInputLong] = useState('')
  
  // Get Weather
  const getWeather = () => {
    if (lat && long) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&daily=temperature_2m_max&daily=temperature_2m_min&temperature_unit=fahrenheit`;

      console.log('Getting data from API')
      axios.get(url).then((response) => {
        setTemp(response.data['hourly']['temperature_2m'][new Date().getHours()]);
        setUnit(response.data['hourly_units']['temperature_2m']);
        setMaxTemp(response.data['daily']['temperature_2m_max'][0]);
        setMinTemp(response.data['daily']['temperature_2m_min'][0]);
      }).catch((error) => {
        console.error('Error fetching weather data: ', error);
      });
    }
  };

  // Get User location
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        (error) => {
          console.error("Error fetching location: ", error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // Get user coordinates once on mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        (error) => {
          console.error("Error fetching location: ", error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Fetch weather data when latitude and longitude change
  useEffect(() => {
    getWeather();
  }, [lat, long]); // Runs only when lat or long changes

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    setLat(input_lat);
    setLong(input_long);
    getWeather(); // Fetch weather data for the new latitude and longitude
  };

  return (
    <div className="flex justify-center bg-nature bg-cover h-screen">
      <div className='flex flex-col justify-between my-16 w-3/4 sm:text-2xl lg:w-1/2'>
        <div className='bg-english-violet text-lg font-extralight text-mint-green rounded-2xl p-4 sm:text-2xl'>
          <div>Now</div>
          <div className='text-8xl font-extrabold sm:text-9xl'>{temp}<span className='text-3xl font-extralight sm:text-4xl'>{unit}</span></div>

          <br/>

          <div>Today</div>
          <div className='text-2xl font-medium sm:text-4xl'>High {max_temp}&deg; &#x2022; Low {min_temp}&deg;</div>
        </div>

        
        
        
        <div className='bg-english-violet text-mountbatten-pink rounded-2xl p-4 '>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 font-medium'>
            <div>
              Different Location?<br/> <a href='https://www.latlong.net/' target='_blank' className='text-blue-300 font-extralight'>Find Coordinates &#8599;</a><br/>
            </div>
            
            
            <div>Latitude</div>
            <input className='rounded-full bg-mint-green text-english-violet px-3 sm:py-1' placeholder='-23.56' value={input_lat} onChange={event => setInputLat(event.target.value)}></input>
            
            
            <label>Longitude</label>
            <input className='rounded-full bg-mint-green text-english-violet px-3 sm:py-1' placeholder='85.17' value={input_long} onChange={event => setInputLong(event.target.value)}></input>
          
            <div className='flex gap-4 justify-between p-1 sm:p-2'>
              <button type='submit' className='bg-raisin-black text-mint-green border border-mint-green font-medium rounded-full px-6 py-1 sm:w-2/5 sm:py-3'>Submit</button>
              <button className='bg-raisin-black text-mint-green border border-mint-green font-medium rounded-full px-4 py-1 sm:w-2/5' onClick={getLocation}>My Location</button>
            </div>
            
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
