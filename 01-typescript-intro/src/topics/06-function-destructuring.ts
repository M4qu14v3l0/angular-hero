
export interface Product {
    description: string;
    price: number;
}


interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { products, tax } = options

    let total = 0;
    products.forEach(({ price }) => {
        total += price
    })

    return [total, total * tax];
}


