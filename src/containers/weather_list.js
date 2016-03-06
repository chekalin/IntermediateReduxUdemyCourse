import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import Map from "../components/map";

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
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
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
            const {lon, lat} = city.coord;
            return (
                <tr key={city.id}>
                    <td><Map lat={lat} lon={lon}/></td>
                    <td><Chart color="orange" data={temps} units="K"/></td>
                    <td><Chart color="grey" data={pressures} units="hPa"/></td>
                    <td><Chart color="blue" data={humidities} units="%"/></td>
                </tr>
            );
        });
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);