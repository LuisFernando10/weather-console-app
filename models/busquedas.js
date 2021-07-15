
    const axios = require('axios');
    
    class Busquedas {

        //Propiedades
        historial = ['Tegucigalpa', 'Madrid', 'San José'];

        constructor() {
            // TODO: leer BD si existe
        }

        // Métodos
        async ciudad( lugar = '' ) {

            try {
                // petición HTTP
                const response = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madr.json?access_token=pk.eyJ1IjoibGZjaGFtb3JybyIsImEiOiJja3Iybm54b2UyZGUxMnptZmR6aG5iZWhhIn0.3GdDWjch4joznMa1TuSKNg&limit=5&language=es');
                console.log( response.data );

                return []; // Retorna lugares que coincidan   

            } catch (error) {
                return [];
            }
        }
    }

    module.exports = Busquedas;