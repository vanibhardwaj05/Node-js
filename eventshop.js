import { EventEmitter } from 'events'
let products = [
    { id: 1, name: "laptop", price: 78000, stock: 10 },
    { id: 2, name: "phone", price: 58000, stock: 8 },
    { id: 3, name: "tv", price: 80000, stock: 4 },
]
function placeorder(user, productid, quantity) {
    const order = new EventEmitter()
    const product = products.find((p) => p.id === productid)
    if (!product || product.stock < 0) {
        console.log(`Order failed for ${user}`)
        return
    }
    order.on("neworder", (user) => {
        console.log(`Email confirmation for ${user}`)
    })
    order.on("neworder", (user, product) => {
        console.log(`Invoice generated for ${user} with product ${product.name}`)
    })
    order.on("neworder", (user, product, price) => {
        console.log(`Invoice generated for ${user} with product ${product.name} - price: ${product.price}`)
    })
    order.on("neworder", (user,product, quantity) => {
        product.stock -= quantity
        console.log(`Stock updated for ${product.name}, remaining stock: ${product.stock}`)
    })

    order.emit("neworder", user, product, quantity)
}
placeorder("Vani", 1, 2)
placeorder("aashi", 4, 5)
