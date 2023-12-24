export class Person {

    constructor(
        public name: string,
        public lastname: string,
        private address?: string
    ) { }
}


// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York')
//     }


// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {

        // this.person = new Person()

    }

}

const tony = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero('Ironman', 23, 'Tony', tony)


console.log(ironman)
