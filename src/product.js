export const product = [{
    name: "producto 1",
    id: 1,
    description: "primer producto",
    img: "https://picsum.photos/200",
    price: 1500,
    stock: 3

},
{
    id: 2,
    name: "producto 2",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000,
    stock: 10
},
{
    id: 3,
    name: "producto 3",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000,
    stock: 8
},
{
    id: 4,
    name: "producto 4",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000,
    stock: 4
},
{
    id: 5,
    name: "producto 5",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000,
    stock: 37
},
{
    id: 6,
    name: "producto 6",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000,
    stock: 3
},
{
    id: 7,
    name: "producto 7",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000,
    stock: 2
},
{
    id: 8,
    name: "producto 8",
    description: "segundo producto",
    img: "https://picsum.photos/200",
    price: 2000,
    stock: 6
}
]

export function getProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(product), 2000)
    })
}

