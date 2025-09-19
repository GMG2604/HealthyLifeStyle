function openModal(food) {

    const modal = document.getElementById('food-modal');
    const title = document.getElementById('modal-title');
    const info = document.getElementById('modal-info');

    if (food === 'apple') {
        title.textContent = 'Apple';
        info.textContent = 'Calories: 95 kcal\nCarbs: 25g\nProtein: 0.5g\nFat: 0.3g\nFibre: 4.4g';
    } else if (food === 'banana') {
        title.textContent = 'Banana';
        info.textContent = 'Calories: 105 kcal\nCarbs: 27g\nProtein: 1.3g\nFat: 0.3g\nFibre: 3.1g';
    } else if (food === 'chicken-breast') {
        title.textContent = 'Chicken Breast';
        info.textContent = 'Per 100g = Calories: 165 kcal\nCarbs: 0g\nProtein: 31g\nFat: 3.6g\nFibre: 0g';
    } else if (food === 'chicken-thighs') {
        title.textContent = 'Chicken Thighs';
        info.textContent = 'Per 100g = Calories: 209 kcal\nCarbs: 0g\nProtein: 26g\nFat: 10g\nFibre: 0g';
    } else if (food === 'white-rice') {
        title.textContent = 'White Rice';
        info.textContent = 'Per 100g = Calories: 130 kcal\nCarbs: 28g\nProtein: 2.7g\nFat: 0.3g\nFibre: 0.4g';
    } else if (food === 'potatoes') {
        title.textContent = 'Potatoes';
        info.textContent = 'Per 100g = Calories: 77 kcal\nCarbs: 17g\nProtein: 2g\nFat: 0.1g\nFibre: 2.2g';
    } else if (food === 'salmon') {
        title.textContent = 'Salmon';
        info.textContent = 'Per 100g = Calories: 206 kcal\nCarbs: 3.6g\nProtein: 22g\nFat: 13g\nFibre: 0g';
    } else if (food === 'egg') {
        title.textContent = 'Egg';
        info.textContent = 'Calories: 60-80 kcal\nCarbs: 1.6g\nProtein: 6g\nFat: 5g\nFibre: 0g';
    } else if (food === 'spinach') {
        title.textContent = 'Spinach';
        info.textContent = 'Per 100g = Calories: 23 kcal\nCarbs: 3.6g\nProtein: 2.9g\nFat: 0.4g\nFibre: 2.2g';
    } else if (food === 'avocado') {
        title.textContent = 'Avocado';
        info.textContent = 'Per 100g = Calories: 160 kcal\nCarbs: 9g\nProtein: 2g\nFat: 15g\nFibre: 7g';
    } else if (food === 'strawberries') {
        title.textContent = 'Strawberries';
        info.textContent = 'Per 100g = Calories: 32 kcal\nCarbs: 7.7g\nProtein: 0.7g\nFat: 0.3g\nFibre: 2g';
    } else if (food === 'blueberries') {
        title.textContent = 'Blueberries';
        info.textContent = 'Per 100g = Calories: 57 kcal\nCarbs: 14.5g\nProtein: 0.7g\nFat: 0.3g\nFibre: 2.4g';
    }

    modal.style.display = 'block'; 
}

function closeModal() {
    const modal = document.getElementById('food-modal');
    modal.style.display = 'none';
}

function searchFood() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const foodList = document.getElementById('food-list');
    const foodItems = foodList.getElementsByClassName('food-box');

    for (let i = 0; i < foodItems.length; i++) {
        const foodName = foodItems[i].getElementsByClassName('food-name')[0].textContent.toLowerCase();
        
        if (foodName.includes(searchQuery)) {
            foodItems[i].style.display = 'block';
        } else {
            foodItems[i].style.display = 'none';
        }
    }
}