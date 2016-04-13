import axios from "axios";
const API_KEY = '28f5c72690758bba709786cb2e45ab48';

export const WEATHER_FETCHED = 'WEATHER_FETCHED';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

function weatherFetched(response) {
    return {
        type: WEATHER_FETCHED,
        payload: response
    }
}

export function fetchWeatherAsync(city) {
    return dispatch => {
        const url = `${ROOT_URL}&q=${city},us`;
        axios.get(url).then(response => {
            dispatch(weatherFetched(response));
        });
    }
}
