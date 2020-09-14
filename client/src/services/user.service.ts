import axios from 'axios';

export class UserService{
    private loginPath: string;
    private signUpPath: string;

    constructor(){
        this.loginPath = "http://localhost:5000/login";
        this.signUpPath = "http://localhost:5000/signUp";
    }

    public login = async ( user: Object ) => {
        try{
            let result = await axios.post( this.loginPath, user );
            return result.data;
        }
        catch( error ){
            console.log(error);
            return error;
        }
    }

    public signUp = async ( user: Object ) => {
        try{
            let result = await axios.post( this.signUpPath, user );
            return result.data;
        }
        catch( error ){
            console.log(error);
            return error;
        }
    }

}