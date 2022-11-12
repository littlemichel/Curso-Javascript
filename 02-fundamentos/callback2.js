const operation = (numero1, numero2, callback) => {
    return setTimeout(() => [
        callback(numero1, numero2)
    ], 500)
}

operation(1,3, (a, b) => a + b)
operation(1,3, (a, b) => a * b)
operation(1,3, (a, b) => a - b)



