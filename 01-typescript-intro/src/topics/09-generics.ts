

export function whatsMyType<T>(argument: T): T {

    return argument
}


let amIString = whatsMyType('Hola mundo')
let amINumber = whatsMyType(100)
let amIArray = whatsMyType([1, 2, 3, 4, 5])

