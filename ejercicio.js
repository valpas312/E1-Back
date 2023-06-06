import { getFile, writeFile } from "./agregarGasto.js";
import { promptEjercicio } from "./promptEjercicio.js";

const run = async () => {
    const answers = await promptEjercicio();
    const file = await getFile("./gastos.json");
    const gasto = [...file, answers];
    await writeFile("./gastos.json", gasto);
    if (answers.accion === "Agregar otro gasto") {
        run();
    } if (answers.accion === "Calcular total gastado") {
        const total = gasto.reduce((acc, {cantidad}) => acc + parseFloat(cantidad), 0);
        console.log(`El total gastado es de $${total}`);
    } if (answers.accion === "Salir") {
        console.log("Gracias por usar la aplicación");
    } if (answers.accion === "Ver mis gastos y conceptos") {
        console.log(
            gasto.map(({concepto, cantidad}) => `Concepto: ${concepto} - Cantidad: $${cantidad}`).join("\n")
        );
    }
};

run();