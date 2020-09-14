import { types, unprotect } from 'mobx-state-tree';
import { CityModel } from '../models/city.model';
import { WeatherService } from '../services/weather.service';

const service: WeatherService = new WeatherService();

export const cityModel = CityModel.create({});

export const WeatherInfo = types.model({
    temperature: types.optional( types.number, 0 ),
    windSpeed: types.optional( types.number, 0 ),
    weatherInfoElement: types.optional( types.boolean, false ),
    city: types.optional( types.string, "" )
})
.actions( self => ({
    async getWeatherInfo( e: React.MouseEvent<HTMLElement, MouseEvent>, cityInput: string ){
        e.preventDefault();
        let city = {
            name: cityInput
        }

        let weatherInfo = await service.getWeatherInfo( city );
        if( weatherInfo.message === "Network Error" ){
            alert( "Server error, try again later" );
        }
        else if( weatherInfo.message ){
            alert( "Wrong city name" );
        } 
        else{
            self.temperature = weatherInfo.main.temp;
            self.windSpeed = weatherInfo.wind.speed;
            self.weatherInfoElement = true;
            self.city = cityInput;
            cityModel.setName( "" );
        } 
    }
}));

export const weatherStore = WeatherInfo.create({});
unprotect( weatherStore );