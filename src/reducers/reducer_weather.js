import {WEATHER_FETCHED} from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case WEATHER_FETCHED:
            return [action.payload.data, ...state];
    }
    return state;
}