import React from 'react';
import { weatherStore } from '../stores/weather.store';

export class WeatherInfoComponent extends React.Component{
    render(){
        return <div className = "info">
            <p>Current temperature in { weatherStore.city } city is { weatherStore.temperature } and wind speed is { weatherStore.windSpeed } meters per second</p>
        </div>
    }
}