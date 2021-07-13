
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
                const response = await axios.get('https://reqres.in/api/users?page=2');
                console.log( response.data );

                return []; // Retorna lugares que coincidan   

            } catch (error) {
                return [];
            }
        }
    }

    module.exports = Busquedas;