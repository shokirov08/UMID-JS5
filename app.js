//задание 1

// let users = {}

// for(let i = 1; i <= 10; i++) {
//    let name = prompt('Введите имя');
//    let age = +prompt('Введите возраст');

//    users[i] = {
//     name: name,
//     age: age
//    }
//    console.log(`Пользователь ${i}`);
//    console.log(`Имя ${users[i].name}`);
//    console.log(`Возраст ${users[i].age}`);
// }

// console.log(users);


//задание 2

// let cart = receipt()
// let menu = 'Вы заказали '
// let delivery = 9000

// for(let key in cart ) {
//     menu = menu + ' ' + key
//     for(let newkey in cart[key]) {
//        menu = newkey == 'info' ? menu + ` ${cart[key][newkey]}` : menu 
//        delivery = newkey == 'price' ? delivery + cart[key][newkey] : delivery
//     }
// }
// console.log(`${menu} | Общая стоимость ${delivery}`);
