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

        // because of TypeScript, the humiditiy and temperature values would render as zeros
        // when nothing was inputted. To work around this, I wanted to only render values when
        // the onSubmit getWeather() was run and wouldn't show anything on the screen.
        
        //React TS won't allow an empty JSX element to render. So this empty variable will 
        // be rendered in an <p> is props aren't passed down to render weather data 
        const empty = "";
        
        return (
            <div>
                {/* If there are props, render the data
                if not, render an empty <p> for each value */}
                { this.props.city && this.props.country ? <p>Location: {this.props.city}, {this.props.country}</p> : <p>{empty}</p> }
                { this.props.temperature ? <p>Temperature: {TempFahr(this.props.temperature)}</p> : <p>{empty}</p>}
                { this.props.humidity ? <p>Humidity: {this.props.humidity}</p> : <p>{empty}</p>}
                { this.props.description ? <p>Conditions: {this.props.description}</p> : <p>{empty}</p>}
            </div>
        ); 
    }
}

export default Weather;