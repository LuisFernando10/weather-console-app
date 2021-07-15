
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
    }

    module.exports = Busquedas;