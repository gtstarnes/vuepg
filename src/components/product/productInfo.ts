const products = [
    {
        category: 'perfume',
        name: 'Gabrielle Essence Eau Dr Parfum',
        des: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
        price: "$149.99",
        ogPrice: "$1969.99",
    },
]

function getProduct(index: number){
    return products[index]
}

export {products, getProduct}