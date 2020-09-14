import * as express from 'express';
import { WeatherService } from '../services/weather.service';

export class WeatherController{
    private service: WeatherService = new WeatherService();

    public getWeather = async ( request: express.Request, response: express.Response ) => {
        let result = await this.service.getWeather( request.body.name );
        console.log( result );
        response.send( result );
    }
}