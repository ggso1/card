async function buildItems() {
    const response = await fetch('js/items.json');
    const itemsArray = await response.json();

    itemsArray.forEach((item) => {
        let itemsDiv = document.createElement('div');
        itemsDiv.classList.add('item');

        itemsDiv.innerHTML = `
            <p class="item-title">${item.title}</p>
            <div class="item-image">
                <img src="img/${item.img}" alt="${item.title}">
            </div>
        `;

        document.getElementById('items').appendChild(itemsDiv);
    });
}

// Виклик функції
buildItems();
