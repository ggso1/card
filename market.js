// // Перевірка підключення
// console.log("market.js підключено");

//  Визначення масиву товарів
let itemsArray = [
    'Газокосарка43',
    'Електичний тример 110',
    'Електична газокосарка 32',
    'Акамуляторний оприскувач 12 N'
]

// Отримання елименту
let itemsDiv = document.getElementById("items");

// Перемінна для зберігання даних
if (itemsDiv) { 
    // Ведення елементів в масиви
    itemsArray.forEach((item) => {
        // console.log(item);
        itemsDiv.innerHTML += `<div class="item">${item}</div>`;     
    })

} else {
    console.log('Блок товарів не знайдено');
}

// Сортування масиву
itemsArray.forEach((item) => {
    console.log(item);
})

// // Виведення масиву в консоль
// for (let i = 0; i < itemsArray.length; i++) {
//     console.log(i + '-й елемент: ', itemsArray[i]);
// }