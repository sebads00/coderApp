export const product = [{
    name: "producto 1",
    id: 1,
    description: "primer producto",
    img: "https://picsum.photos/200",
    price: 1500

},
{
    id: 2,
    name: "producto 2",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000
}
]

export function getProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(product), 3000)
    })
}

