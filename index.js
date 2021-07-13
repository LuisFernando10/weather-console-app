const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {

    const busquedas = new Busquedas(); // Instancia
    
    let option;

    do{

        option = await inquirerMenu();

        switch( option ){

            case 1:
                // Mostrar mensaje
                const lugar = await leerInput( 'Ciudad: ' );
                console.log(lugar);

                // Buscar los lugares

                // Seleccionar el lugar

                // Clima

                //Mostrar resultados
                console.log('\nInformación de la ciudad:\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Mínima:', );
            break;

            case 2:
                console.log(`La opción fue dos: ${ option }`);
            break;
        }

        if( option !== 0 ) await pausa();

    } while( option !== 0 )
}

main();