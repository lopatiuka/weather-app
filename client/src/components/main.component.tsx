import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react';
import { cityModel, weatherStore } from '../stores/weather.store';
import { WeatherInfoComponent } from './weather-info.component';
import { userStore } from '../stores/user.store';

@observer
export class MainComponent extends React.Component{
    componentDidMount(){
        userStore.isAuthorized();
    }
    render(){
        return <div className = 'weather-window'>
            <Button className = "logout-button" variant="danger" type="submit" onClick = { e => userStore.logout() }>
                    Logout
            </Button>
            <Form>
                <Form.Group>
                    <Form.Label>Enter the city name to find out the weather</Form.Label>
                    <Form.Control required type="text" placeholder="Enter city" value = { cityModel.name }
                    onChange = { e => cityModel.setName( e.target.value ) } />
                </Form.Group>
                <Button variant="primary" type="submit" onClick = { e => weatherStore.getWeatherInfo( e, cityModel.name ) }>
                    Submit
                </Button>
            </Form>
            { weatherStore.weatherInfoElement ? <WeatherInfoComponent/> : null }
        </div>
    }
}