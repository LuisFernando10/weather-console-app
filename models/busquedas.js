
    const axios = require('axios');
    
    class Busquedas {

        //Propiedades
        historial = ['Tegucigalpa', 'Madrid', 'San José'];

        constructor() {
            // TODO: leer BD si existe
        }

        get paramMapbox(){
            return {
                'access_token': 'pk.eyJ1IjoibGZjaGFtb3JybyIsImEiOiJja3Iybm54b2UyZGUxMnptZmR6aG5iZWhhIn0.3GdDWjch4joznMa1TuSKNg',
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

                console.log( response.data );

                return []; // Retorna lugares que coincidan   

            } catch (error) {
                return [];
            }
        }
    }

    module.exports = Busquedas;