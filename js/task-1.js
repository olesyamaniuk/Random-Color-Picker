// const categoriesList = document.getElementById('categories');
// console.log(categoriesList)
// const categoryItems = categoriesList.querySelectorAll('li.item');

// console.log(`Numbers of categories: ${categoryItems.length}`);

// categoryItems.forEach(item => {
//     const categoryTitle = item.querySelector('h2').textContent;

//     const categoryElements = item.querySelectorAll('ul li');

//     console.log(`Category: ${categoryTitle}`);
//     console.log(`Elements: ${categoryElements.length}`);
// });
// -----------------------------------------------------------------

const categoriesItem = document.querySelectorAll('li.item');
console.log(categoriesItem);

console.log(categoriesItem.length);

categoriesItem.forEach(item =>{

const categoriesTitle = item.querySelector('h2').textContent;
console.log(categoriesTitle);

const categoriesEl = item.querySelectorAll('ul li').length;
console.log(categoriesEl);


})