'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RequestPositionUser from '@/classes/RequestPositionUser';
import {FaTemperatureLow, FaTemperatureHigh, FaWind } from "react-icons/fa";
import {WiHumidity } from "react-icons/wi";
import {AiFillEyeInvisible} from "react-icons/Ai";
import { RiThunderstormsLine, RiDrizzleLine, RiRainyLine, RiSnowyLine, RiSunLine, RiCloudyLine } from 'react-icons/ri';


interface typeClima {
    main: string;
    temp: number;
    temp_max: number;
    temp_min: number;
    umidade: number;
    pressao: number;
    visibilidade: number;
    descricao: string;
    icon: string;
    wind_speed: number;

    timezone: boolean;
}

const ClimaPage = () => {

    const [latitude, setLatitude] = useState<unknown>('');
    const [longitude, setLongitude] = useState<unknown>('');
    const [backGroundImage, setBackGroundImage] = useState('');
    const [clima, setClima] = useState<typeClima>({
        temp: 0,
        descricao: '',
        umidade: 0,
        icon: '',
        main: '',
        pressao: 0,
        temp_min: 0,
        temp_max: 0,
        visibilidade: 0,
        wind_speed: 0,

        timezone : false
    });
    let mainClimaPlanoDeFundo  = {
        ThunderStorm: 'https://static.vecteezy.com/ti/fotos-gratis/p1/5131507-fundo-da-escuridao-ceu-enquanto-tempestade-esta-chegando-gratis-foto.jpg',
        Drizzle : 'https://wallpapercave.com/wp/Z0kmvgB.jpg',
        Rain : 'https://www.itl.cat/pngfile/big/15-153493_rain-wallpaper-rain-at-night.jpg',
        Snow : 'https://wallpapers.com/images/featured/snow-aesthetic-kp4ho057ydvyu87s.jpg',
        Clouds: 'https://static.vecteezy.com/system/resources/previews/016/655/386/large_2x/sky-background-nature-sky-blue-background-cloud-light-summer-day-sunny-weather-space-clear-sun-white-high-beautiful-landscape-outdoors-sunlight-cloudy-outdoor-abstract-wallpaper-free-photo.jpg',
        Clear : 'https://static.vecteezy.com/ti/fotos-gratis/p1/15234388-fundo-do-ceu-ceu-azul-limpo-e-nuvens-brancas-fundo-do-ceu-com-espaco-para-decoracao-e-usado-para-fazer-papel-de-parede-ou-trazer-para-o-trabalho-em-design-grafico-gratis-foto.jpg)'
    };
    const ClimaIcons = {
        Thunderstorm: <RiThunderstormsLine />,
        Drizzle: <RiDrizzleLine />,
        Rain: <RiRainyLine />,
        Snow: <RiSnowyLine />,
        Clear: <RiSunLine />,
        Clouds: <RiCloudyLine />,
    };
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b25383213542d0c393be71270857b743`;

    useEffect(() => {
        const fetchClima = async () : Promise<void> => {
            try {
                const response  = await axios.get(url);
                const weatherData = response.data;
                const now = new Date();
                const currentHour = now.getHours();
                const isNight = currentHour >= 18 || currentHour < 6;
                setClima({
                    temp: weatherData.main.temp - 273,
                    descricao: weatherData.weather[0].description,
                    umidade: weatherData.main.humidity,
                    icon: weatherData.weather[0].icon,
                    main: weatherData.weather[0].main,
                    pressao: weatherData.main.pressure,
                    temp_min: weatherData.main.temp_min - 273 ,
                    temp_max: weatherData.main.temp_max - 273,
                    visibilidade: weatherData.visibility,
                    wind_speed: weatherData.wind.speed,
                    url: '',
                    timezone : isNight
                });


                // @ts-ignore
                if (mainClimaPlanoDeFundo[weatherData.weather[0].main] ) {
                    setBackGroundImage(`url("${mainClimaPlanoDeFundo[weatherData.weather[0].main]}")`);
                    if (clima.timezone) {
                        setBackGroundImage(`url("https://cdn.wallpapersafari.com/72/13/HDLsvt.jpg")`)
                    }

                }
            } catch (error) {
                console.error('Erro ao buscar dados do clima:', error);
            }
        };

        const getCoordenadas = async () : Promise<void> => {
            try {
                const latitudeResponse = await RequestPositionUser.getLatitudeApi();
                const longitudeResponse = await RequestPositionUser.getLongitude();
                setLatitude(latitudeResponse);
                setLongitude(longitudeResponse);
            } catch (error) {
                console.error('Erro ao buscar coordenadas:', error);
            }
        };

        getCoordenadas();
        fetchClima();
    }, [url]);

    // @ts-ignore
    return (
        <div className="min-h-screen flex justify-center items-center " style={{ backgroundImage: backGroundImage, backgroundSize: 'cover', transition: 'background-image 0.5s' }}>
            <h1 className={"text-6xl mb-[300px] text-gray-200 "}> {ClimaIcons[clima.main]} {(clima.temp.toFixed(0))}°C</h1>
            <div className={"w-6/12  h-[500px] mt-96 absolute   rounded-3xl shadow-2xl "}>
                <div className={"  ml-40 absolute"}>
                    <div  className={" bg-neutral-300  rounded-3xl  w-64 h-48 m-20 shadow-2xl "}>
                        <p className={"flex p-2 ml-2 "}> <FaTemperatureHigh/> Maxima: {clima.temp_max.toFixed(0)} </p>
                        <p className={"flex p-2 ml-2 "}><FaTemperatureLow /> Minima: {clima.temp_min.toFixed(0)} </p>
                    </div>
                    <div  className={"bg-neutral-300 rounded-3xl  w-40 h-20 m-20 shadow-2xl flex items-center justify-center"}>
                        <p > <WiHumidity/>  {clima.umidade}</p>
                    </div>

                </div>
                <div className={"absolute  ml-40 "}>
                    <div  className={" bg-neutral-300  rounded-3xl  mb-0 w-40 h-20 ml-[380px] mt-[80px] shadow-2xl  "}>
                        <p className={"flex p-2 ml-2 "}> <AiFillEyeInvisible/> Visibilidade: {clima.visibilidade.toFixed(0)} </p>
                    </div>
                    <div  className={"bg-neutral-300 rounded-3xl w-40 h-20 m-20 shadow-2xl  ml-[380px] mt-[80px] flex items-center justify-center"}>
                        <p > <FaWind/>  {clima.wind_speed}</p>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default ClimaPage;