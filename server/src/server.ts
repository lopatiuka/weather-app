import 'dotenv/config';
import { createConnection } from 'typeorm';
import WeatherRoute from './routes/weather.route';
import App from './app';
import UserRoute from './routes/user.route';
import config from './ormconfig';
 
( async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App( [new WeatherRoute, new UserRoute], 5000 );
  app.listen();
})();