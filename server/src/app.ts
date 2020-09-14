import express from 'express';
import * as bodyParser from 'body-parser';

class App {
  public app: express.Application;
  public port: number;
 
  constructor( controllers, port ) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers( controllers );
  }
  
  private initializeMiddlewares() { 
    
    this.app.use(bodyParser.json()); 
    this.app.use(function( req, res, next ) {
      res.header( "Access-Control-Allow-Origin", "http://localhost:3000"  ); 
      res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept, Content-Range" );
      res.header( "Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH" );
      res.header( "Access-Control-Allow-Credentials", "true" );
      res.header( "Access-Control-Expose-Headers", "Content-Range, X-Total-Count" );
      next();
    });
  }
 
  private initializeControllers( controllers ) {
    controllers.forEach( ( controller ) => {
      this.app.use( '/', controller.router );
    });
  }
 
  public listen() {
    this.app.listen( this.port, () => {
      console.log(`App listening on the port ${this.port}` );
    });
  }
}
 
export default App;