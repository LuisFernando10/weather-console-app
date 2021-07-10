const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");

const main = async() => {
    
    let option;

    do{

        option = await inquirerMenu();

        switch( option ){

            case 1:
                console.log(`La opción fue uno: ${ option }`);
            break;

            case 2:
                console.log(`La opción fue dos: ${ option }`);
            break;
        }

        if( option !== 0 ) await pausa();

    } while( option !== 0 )
}

main();