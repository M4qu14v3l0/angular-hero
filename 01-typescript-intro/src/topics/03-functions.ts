
function addNumbers(a: number, b: number) {
    return a + b
}

const addNumbersArrow = (a: number, b: number): number => {
    return a + b
}

function multiply(firstnumber: number, secondnumber?: number, base: number = 2) {
    return firstnumber * base
}

// const result: number = addNumbers(1, 2)
// const result2: number = addNumbersArrow(4, 5)
// const result3: number = multiply(5)

// console.log({ result })
// console.log({ result2 })
// console.log({ result3 })


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {


    character.hp += amount;

}


const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter(strider, 50)
strider.showHp()



export { }