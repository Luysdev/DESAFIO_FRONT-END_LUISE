import {Navigator} from "node-navigator";
const navigator = new Navigator();
class RequestPositionUser {
    getLatitudeApi(){
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.latitude;
                    resolve(latitude);
                },
            );
        });}
    getLongitude(){
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const longitude = position.longitude;
                    resolve(longitude);
                },
            );
        });}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RequestPositionUser;

