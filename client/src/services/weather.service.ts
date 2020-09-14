import axios from 'axios';


export class WeatherService{
    private path: string;
    private token: any;
    constructor(){
        this.path = "http://localhost:5000/weather";
        this.token = localStorage.getItem( "token" );
    }

    public getWeatherInfo = async ( city: Object ) => {
        try{
            let result = await axios.post( this.path, city, {
                headers: {
                    'Authorization': `Bearer ${ this.token }`,
                }
            } );
            return result.data;
        }
        catch( error ){
            console.log(error);
            return error;
        }
    }

}