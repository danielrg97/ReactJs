import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN, RAIN } from '../../constraints/weathers';
import { resolve } from 'url';

const location ="London,uk"
const api_key="abf7873c23c5b00735d0cbab15860e1e";
const url_base_weather="https://samples.openweathermap.org/data/2.5/weather";

const api_weather =`${url_base_weather}?q=${location}&appid=${api_key}`;
const data = {
     temperature: 5,
     weatherState: SUN,
     humidity: 10,
     wind: `10 m/s`,
}
const data2 ={
     temperature:15,
     weatherState: RAIN,
     humidity: 20,
     wind: `10 m/s`,
}

class WeatherLocation extends Component {

     constructor(){
          super();
          this.state={
               city: 'Buenos Aires',
               data: data,

          };
     }
     handleUpdateClick = ()=> {
         fetch(api_weather).then( resolve=> {
               console.log(resolve);
               debugger;
          });;

          this.setState({
               data: data2,

          });
     }
     render() {
          const { city, data }=this.state; 
          return (<div className="weatherLocationCont">
               <Location city={this.state.city}></Location>
               <WeatherData data={data}></WeatherData>
               <button onClick={this.handleUpdateClick}>Actualizar</button>
          </div>
          );
     }
}


export default WeatherLocation;