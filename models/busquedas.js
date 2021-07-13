
    class Busquedas {

        //Propiedades
        historial = ['Tegucigalpa', 'Madrid', 'San José'];

        constructor() {
            // TODO: leer BD si existe
        }

        // Métodos
        async ciudad( lugar = '' ) {

            // perición HTTP
            console.log(lugar);

            return []; // Retorna lugares que coincidan
        }
    }

    module.exports = Busquedas;