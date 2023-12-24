export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Eli']
}

const returnChildren = ({ name, children }: Passenger): number => {
    const howManyChildren = children?.length || 0;
    console.log(name, howManyChildren)

    return howManyChildren
}

returnChildren(passenger2)