import * as express from 'express';
import { WeatherController } from '../controllers/weather.controller';
import authenticationMiddleware from '../middlewares/authentication.middleware';

class WeatherRoute{
  public path = '/weather';
  public router = express.Router();
  public controller = new WeatherController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post( this.path, authenticationMiddleware(), this.controller.getWeather );
  }
}

export default WeatherRoute;