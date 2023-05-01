
const products = [
    {id: '1', name: 'Guantes', price: 12000, category: 'Guantes', stock: 25, description: 'Guantes de boxeo 12/14oz', img: './public/Guantes.webp'},
    {id: '2', name: 'Vendas', price: 3000, category: 'Vendas', stock: 25, description: 'Vendas protectoras 3mts', img: './public/vendas.webp'},
    {id: '3', name: 'Bucales', price: 2000, category: 'Bucales', stock: 25, description: 'Protector bucal', img: './public/bucal.webp'},
    {id: '4', name: 'Proteinas', price: 16000, category: 'Proteinas', stock: 25, description: 'Suplemento nutricional a base de proteinas animales', img: './public/proteinas.webp'},
    {id: '5', name: 'Batidores', price: 5000, category: 'Batidores', stock: 25, description: 'Vaso batidor para tus suplementos', img: './public/shaker.webp'},
    {id: '6', name: 'Cinturones', price: 10000, category: 'Cinturones', stock: 25, description: 'Cinturon de fuerza para reforzar tus entrenamientos', img: './public/cinturon.webp'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

