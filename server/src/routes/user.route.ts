import * as express from 'express';
import { UserController } from '../controllers/user.controller';

class UserRoute{
  public loginPath: string = '/login';
  public signUpPath: string = '/signUp'
  public router = express.Router();
  public controller: UserController = new UserController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post( this.loginPath, this.controller.login );
    this.router.post( this.signUpPath, this.controller.signUp );

  }
}

export default UserRoute;