function ordenamiento_burbuja(array) {
    let lista_desordenada = array.length - 1;
    let ordenado = false;

    while (!ordenado) {
        ordenado = true;
        for (let i = 0; i < lista_desordenada; i++){
            if (array[i] > array[i + 1]) {
                let temporal = array[i] // 7
                array[i] = array[i + 1];
                array[i + 1] = temporal;
                ordenado = false;
            }
        }

        lista_desordenada--; // lista_desordenada -= 1;
    }

    return array;
}

let lista = [7, 3, 8, 2];
console.log(lista);
console.log(ordenamiento_burbuja(lista));