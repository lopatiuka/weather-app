import * as express from 'express';
import { UserService } from '../services/user.service';

export class UserController{
    private service: UserService = new UserService();

    public signUp = async ( request: express.Request, response: express.Response ) => {
        let result = await this.service.signUp( request.body );
        response.send( result );
    }

    public login = async ( request: express.Request, response: express.Response ) => {
        let result = await this.service.login( request.body );
        response.send( result );
    }
}