import React from 'react'
import './style.css'
import { useWeather } from '../../../Context/weatherContext';

function NavRight() {
const {weather} = useWeather();
  const date = new Date(weather[0].date)
 
  const dayNumber = date.getDay()
  const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
  const day = daysOfWeek[dayNumber];
  const hour = date.getHours();
  const minute = date.getMinutes();
  return (
    <div className="VQF4g">
      <span >
        <div className="wob_loc q8U8x" >Hava durumu</div>
        <div className="wob_dts" >{day} </div>
        <div className="wob_dcp" >
          <span >{weather[0].day.condition.text}</span>
        </div>
      </span>
    </div>
  )
}

export default React.memo(NavRight);