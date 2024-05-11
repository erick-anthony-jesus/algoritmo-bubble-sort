function ordenamiento_burbuja2(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - i - 1; j++){
            if (array[j] > array[j + 1]) {
                let temporal = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporal;
            }
        }
    }
}
let lista2 = [11, 5, 87, 2];
console.table(lista2)

ordenamiento_burbuja2(lista2);
console.table(lista2)