import * as React from 'react';

interface IWeatherProps {
    city: string;
    country: string;
    description: string;
    humidity: number;
    temperature: number
}

class Weather extends React.Component<IWeatherProps> {

    public render () {
        // OpenWeatherAPI gives back temp in Kelvin
        // function to convert to Fahrenheit
        function TempFahr(kelvin:number): number {
            return (Math.round((kelvin-273.15)*1.8)+32);
        };
        return (
            <div>
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
                { this.props.temperature && <p>Temperature: {TempFahr(this.props.temperature)}</p>}
                { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
                { this.props.description && <p>Conditions: {this.props.description}</p> }
            </div>
        ); 
    }
}

export default Weather;