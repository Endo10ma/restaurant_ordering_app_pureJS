import { menuArray } from './data.js'

const menu = document.getElementById('menu')
const orderSection = document.getElementById('orderSection')
const orders = document.getElementById('orders')
const total = document.getElementById('total')
const completeOrderBtn = document.getElementById('complete-order-btn')
const paymentForm = document.getElementById('payment-form')
let orderItem = []
const form = document.querySelector('#payment-form form')
const thanks = document.getElementById('thanks')

const payButton = document.getElementById('pay')

document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
});

payButton.addEventListener('click', () => {
    const paymentData = new FormData(form)
    thanks.textContent = `Thanks, ${paymentData.get('name')}! Your order is on its way!`
    paymentForm.classList.remove('show')
    paymentForm.classList.add('hide')
    thanks.classList.add('show')
    hideOrders()
    orderItem = []
})

completeOrderBtn.addEventListener('click', () => {
    paymentForm.classList.add('show')
})

function showOrders(){
    orderSection.classList.add('show')
}

function hideOrders(){
    orderSection.classList.remove('show')
}

function addOrderItem(id){
    console.log('Hello')
    const item = menuArray.find(item => {
        return (item.id == Number(id))})
    orderItem.push(item)
}

function renderOrder(){
    orders.innerHTML = ''
    orderItem.forEach(CustomerOrder => {
        const order = document.createElement('div')
        order.className = 'item-order-detail'

        const orderName = document.createElement('h1')
        orderName.textContent = CustomerOrder.name
        order.append(orderName)

        const removeBtn = document.createElement('p')
        removeBtn.textContent = 'remove'
        removeBtn.setAttribute('data-removeid', CustomerOrder.id)
        order.append(removeBtn)

        const orderPrice = document.createElement('h4')
        orderPrice.textContent = `$${CustomerOrder.price}`
        order.append(orderPrice)
        orders.append(order)
    })
    
    total.innerHTML = ''
    const orderTotal = orderItem.reduce((total, order) => total  + order.price, 0)
    
    const priceLabel = document.createElement('h1')
    priceLabel.textContent = 'Total Price:'
    total.append(priceLabel)
    
    const totalPrice  = document.createElement('h4')
    totalPrice.append(`$${orderTotal}`)
    total.append(totalPrice)


}

function createOrderItem(id){
    if (orderItem.length < 1){
        showOrders()
    }
    addOrderItem(id)
    renderOrder()
}

function removeOrder(id){
    const element = orderItem.find(element => orderItem.id = id)
    const index = orderItem.indexOf(element)

    orderItem.splice(index,1)
    orders.append()

    if (orderItem.length<1){
        hideOrders()
    }
    renderOrder()
}

document.addEventListener('click', (e) => {
        
    if(e.target.dataset.id){
        createOrderItem(e.target.dataset.id)
    }

    if(e.target.dataset.removeid){
        removeOrder(e.target.dataset.removeid)
    }
})

const renderMenu = () => {

    menu.innerHTML = ''

    menuArray.forEach(items => {
        const article = document.createElement('article')
        article.className = 'menu-item'

        const emoji = document.createElement('span')
        emoji.className = 'icon'
        emoji.textContent = items.emoji
        article.append(emoji)

        const dish = document.createElement('div');
        dish.className = 'dish'

        const food = document.createElement('h1');
        food.textContent= items.name

        const ingredients = document.createElement('p')
        ingredients.textContent = items.ingredients

        const price = document.createElement('h4')
        price.textContent = `$${items.price}`

        const addBtn = document.createElement('button')
        addBtn.className = 'add-menu-btn'
        addBtn.textContent = '+'
        addBtn.setAttribute('data-id', items.id)


        dish.append(food)
        dish.append(ingredients)
        dish.append(price)

        article.append(dish)
        article.append(addBtn)
        menu.appendChild(article)
    })
}



renderMenu()