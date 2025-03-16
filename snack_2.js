// Snack 2

// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    const lancio = new Promise((resolve, reject) => {
        console.log('The die is rolling...');
        setTimeout(() => {
            const face = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            const dieStuck = Math.floor(Math.random() * (5 - 1 + 1) + 1);
            if (dieStuck !== 3) {
                resolve(face)
            } else
                reject('The die fell on the floor...')
        }, 3000)
    });
    return lancio;
}


lanciaDado()
    .then(
        result => console.log(result),
        error => console.log(error)
    )
    .catch(error => console.error(error));



// Bonus: HOF con closure per memorizzare l'ultimo lancio

// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".





