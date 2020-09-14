import request from 'request';
import axios from 'axios';

export class WeatherService{
    private apiKey: string;
    constructor(){
        this.apiKey = "0dfb153dc4ada39fef0c8fd9eb275970";
    }
    public getWeather = async ( city ) => {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${ city }&units=metric&appid=${ this.apiKey }`
            let result = await axios.get(url);
            return result.data;
        }
        catch( error ){
            return error;
        }
        
    }
}
        
