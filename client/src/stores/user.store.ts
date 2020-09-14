import { types, unprotect } from 'mobx-state-tree';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

const service: UserService = new UserService();

export const userModel = UserModel.create({});

const UserStore = types.model({
    email: types.optional( types.string, "" )
})
.actions( self => ({
    async login( e: React.MouseEvent<HTMLElement, MouseEvent>, inputEmail: string, inputPassword: string ){
        e.preventDefault();
        if( inputEmail === "" || inputPassword === ""){
            alert( "All fields required" )
        }
        else{
            let data = {
                email: inputEmail,
                password: inputPassword
            }
            let token = await service.login( data );
            if( token ){
                localStorage.setItem( "token", token );
                userModel.setEmail( "" );
                userModel.setPassword( "" );
                window.location.href = "/";
            }
            else{
                alert( "Uncorrect login or password" );
            }
        } 
    },

    async signUp( e: React.MouseEvent<HTMLElement, MouseEvent>, inputEmail: string, inputPassword: string ){
        e.preventDefault();
        if( inputEmail === "" || inputPassword === ""){
            alert( "All fields required" )
        }
        else
        {
            let data = {
                email: inputEmail,
                password: inputPassword
            }
    
            let result = await service.signUp( data );
            if( result !== "Registrated" ){
                alert( "You successfully sidned up");
                userModel.setEmail( "" );
                userModel.setPassword( "" );
                window.location.href = "/login";
            }
            else{
                alert( "You are registrated already, login" );
            }
        } 
    },

    async isAuthorized(){
        if( !localStorage.getItem( "token" )){
            window.location.href = "/login";
        }
    },

    logout(){
        localStorage.removeItem( "token" );
        window.location.href = "/login";
    }

}))

export const userStore = UserStore.create({});
unprotect( userStore );