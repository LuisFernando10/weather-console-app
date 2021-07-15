
    const axios = require('axios');
const { restoreDefaultPrompts } = require('inquirer');
    
    class Busquedas {

        //Propiedades
        historial = ['Tegucigalpa', 'Madrid', 'San José'];

        constructor() {
            // TODO: leer BD si existe
        }

        get paramMapbox(){
            return {
                'access_token': process.env.MAPBOX_KEY || '',
                'limit': 5,
                'language': 'es'
            }
        }

        get paramOpenWeather(){
            return {
                'appid': process.env.OPENWEATHER_KEY || '',
                'units': 'metric',
                'lang': 'es'
            }
        }

        // Métodos
        async ciudad( lugar = '' ) {

            try {
                // Petición HTTP
                const instance = axios.create({
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                    params: this.paramMapbox
                });

                const response = await instance.get();

                return response.data.features.map( lugar => ({
                    id: lugar.id,
                    nombre: lugar.place_name,
                    lng: lugar.center[0],
                    lat: lugar.center[1]
                }));

            } catch (error) {
                return [];
            }
        }

        async climaLugar( lat, lon ) {

            try {
                
                const instance = axios.create({
                    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                    params: { ...this.paramOpenWeather, lat, lon }
                });

                const response = await instance.get();
                const { main, weather } = response.data;

                return {
                    desc: weather[0].description,
                    min: main.temp_min,
                    max: main.temp_max,
                    temp: main.temp
                };
            } catch (error) {
                console.log( error );
            }
        }

        async agregarHistorial( lugar = '' ) {

            // TODO: Prevenir duplicados
            this.historial.unshift( lugar );
    
            // Grabar en BD
        }
    }

    module.exports = Busquedas;