import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {

    render() {
        if (!this.props.weather) {
            return <div>Search for a city!</div>
        }
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.renderWeather()}
                </tbody>
            </table>
        );
    }

    renderWeather() {
        return this.props.weather.map(cityData => {
            const city = cityData.city;
            const temps = cityData.list.map(weather => weather.main.temp);
            const pressures = cityData.list.map(weather => weather.main.pressure);
            const humidities = cityData.list.map(weather => weather.main.humidity);
            return (
                <tr key={city.id}>
                    <td>{city.name}</td>
                    <td>
                        <Chart color="orange" data={temps}/>
                    </td>
                    <td>
                        <Chart color="grey" data={pressures}/>
                    </td>
                    <td>
                        <Chart color="blue" data={humidities}/>
                    </td>
                </tr>
            );
        });
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);