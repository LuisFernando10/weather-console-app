const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Buscar ciudad.`
            },
            {
                value: 2,
                name: `${ '2.'.green } Tiempo.`
            },
            {
                value: 0,
                name: `${ '0.'.green } Salir.`
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('= = = = = = = = = = = ='.green);
    console.log(' Seleccione una opción '.white);
    console.log('= = = = = = = = = = = =\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `${'Por favor, presione'.green} ${'ENTER'.red} ${'para continuar.'.green}`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
};

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ){

                if( value.length === 0 ){
                    return 'Por favor ingrese un valor.';
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt( question );
    return description;
};

const listadoLugares = async( lugares = [] ) => {

        const choices = lugares.map( (lugar, key) => {

            const idx = `${ key + 1 }.`.green;

            return {
                value: lugar.id,
                name: `${ idx } ${ lugar.nombre }`
            }
        });

        choices.unshift({
            value: '0',
            name: '0.'.green + 'Cancelar.'
        });

        const preguntas = [
            {
                type: 'list',
                name: 'id',
                message: 'Seleccione lugar.\n',
                choices
            }
        ]

        const { id } = await inquirer.prompt( preguntas )
        return id;
}

const confirmar = async( message ) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt( question );
    return ok;
}

const listadoTareasCheckbox = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, key) => {

        const idx = `${ key + 1 }.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.description }`,
            checked: ( tarea.completedIn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones:',
            choices
        }
    ]

    const { ids } = await inquirer.prompt( pregunta )
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoLugares,
    confirmar,
    listadoTareasCheckbox
}