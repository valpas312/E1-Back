import inquirer from 'inquirer';

const questions = [
    {
        type: 'input',
        name: 'concepto',
        message: 'Ingrese el concepto del gasto:',
      },
      {
        type: 'input',
        name: 'cantidad',
        message: 'Ingrese la cantidad gastada:',
        validate: function (value) {
          const valid = !isNaN(parseFloat(value));
          return valid || 'Por favor, ingrese un número válido.';
        },
      },
      {
        type: 'list',
        name: 'accion',
        message: '¿Qué desea hacer?',
        choices: ['Agregar otro gasto', 'Calcular total gastado', 'Ver mis gastos y conceptos', 'Salir'],
      },
];

export const promptEjercicio = async () => {
    return await inquirer.prompt(questions);
};