import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.entity";
import { getRepository } from 'typeorm';

export class UserService{
    
    private userRepository;

    constructor(){
        this.userRepository = getRepository( User );
    }

    public async signUp( body ){
        try{
            let hashPassword: string;
            let result = await this.userRepository.find( { email: body.email } );
            if ( result[0] )
            return "Registrated";   
            else{                
                await ( bcrypt
                .genSalt( 12 )
                .then( salt => {            
                    return bcrypt.hash( body.password, salt );
                })
                .then( async ( hash ) => {
                    hashPassword = hash;
                }))
                .catch( err => console.error( "Hashing error ", err.message ) );

                body.password = hashPassword;

                const newUser = this.userRepository.create( body );
                await this.userRepository.save( newUser );
                return( newUser );
            } 
        }
        catch( err ){
            return err;
        }
    }

    public async login( body ){
        let user = await this.userRepository.findOne( { email: body.email } );

        if( !user ) 
        return false;

        let result = await bcrypt.compare( body.password, user.password )
        if ( !result ) { return false; }
        let token = jwt.sign( { username: body.email }, 'secret');
        return token;
        
    }
}