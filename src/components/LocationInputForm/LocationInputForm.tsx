import * as React from 'react';

// receiving a function via props and defining it here
interface ILocationInputFormProps {
     getWeather: (event: any) => Promise<void>
    };

// stateless component rendering a form 
const LocationInputForm: React.SFC<ILocationInputFormProps> = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
    </form>
);

export default LocationInputForm;