import * as React from 'react';

interface ILocationInputFormProps {getWeather: (event: any) => Promise<void>};

class LocationInputForm extends React.Component<ILocationInputFormProps> {

    public render () {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default LocationInputForm;