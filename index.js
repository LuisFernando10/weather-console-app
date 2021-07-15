require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listadoLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {

    const busquedas = new Busquedas(); // Instancia
    
    let option;

    do{

        option = await inquirerMenu();

        switch( option ){

            case 1:
                // Mostrar mensaje
                const termino_busqueda = await leerInput( 'Ciudad: ' );

                // Buscar los lugares
                const lugares = await busquedas.ciudad( termino_busqueda );

                // Seleccionar el lugar
                const id_seleccionado = await listadoLugares( lugares );
                const { nombre, lng, lat } = lugares.find( lugar => lugar.id === id_seleccionado );

                // Clima
                const { desc, min, max, temp } = await busquedas.climaLugar( lat, lng );

                //Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad:\n'.green);
                console.log('Ciudad:', nombre.green);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Temperatura:', temp);
                console.log('Mínima:', min);
                console.log('Máxima:', max);
                console.log('Como está el Clima:', desc);
            break;

            case 2:
                console.log(`La opción fue dos: ${ option }`);
            break;
        }

        if( option !== 0 ) await pausa();

    } while( option !== 0 )
}

main();