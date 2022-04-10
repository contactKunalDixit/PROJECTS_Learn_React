const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem'); //multiple elements gives array

const products = [
	{
		id: 1,
		title: 'Air Force',
		price: 119,
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos placeat odit perferendis aperiam esse aspernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus culpa.',

		colors: [
			{
				code: 'black',
				img: './Images/air.png',
			},
			{
				code: 'darkblue',
				img: './Images/air2.png',
			},
		],
	},
	{
		id: 2,
		title: 'Air Jordan',
		price: 149,
		desc: 'Accusamus, tenetur magni quas corrupti nam ducimus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos placeat odit perferendis aperiam esse aspernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus culpa.icing elit. Eos placeat odit perferendis aperiam esse aspernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus culpaicing elit. Eos placeat odit perferendis aperiam esse aspernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus culpa',
		colors: [
			{
				code: 'lightgray',
				img: './Images/jordan.png',
			},
			{
				code: 'green',
				img: './Images/jordan2.png',
			},
		],
	},
	{
		id: 3,
		title: 'Blazer',
		price: 109,
		desc: 'Aspernatur inventore aliquid eveniet reLorem ipsum dolor sit, amet consectetur adipisicing eliture, accusamus, tenetur magni quas corrupti nam ducimus culpa.',
		colors: [
			{
				code: 'lightgray',
				img: './Images/blazer.png',
			},
			{
				code: 'green',
				img: './Images/blazer2.png',
			},
		],
	},
	{
		id: 4,
		title: 'Crater',
		price: 129,
		desc: 'Magni quas corrupti nam ducimus culpaLorem ipsum dolor sit, amet consectetur adipisicing elit. Eos placeat odit perferendis aperiam esse aspernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus culpa.spernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus cu',
		colors: [
			{
				code: 'black',
				img: './Images/crater.png',
			},
			{
				code: 'lightgray',
				img: './Images/crater2.png',
			},
		],
	},
	{
		id: 5,
		title: 'Hippie',
		price: 99,
		desc: 'TUur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti namLorem ipsum dolor sit, amet consectetur adipisicing elit. Eos placeat odit perferendis aperiam esse aspernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus culpa.spernatur inventore aliquid eveniet repellat quam amet iure, accusamus, tenetur magni quas corrupti nam ducimus cu',
		colors: [
			{
				code: 'gray',
				img: './Images/hippie.png',
			},
			{
				code: 'black',
				img: './Images/hippie2.png',
			},
		],
	},
];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color'); //multiple elements gives array
const currentProductSizes = document.querySelectorAll('.size'); //multiple elements gives array
const currentProductDesc = document.querySelector('.productDesc');
let chosenProduct = products[0];

// todo: inital info displayed when the site opens.

console.log(chosenProduct);

menuItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		console.log('You Clicked' + ' ' + index);
		// change the current slide
		wrapper.style.transform = `translateX(${-100 * index}vw)`;

		// change the chosen product
		chosenProduct = products[index];

		// change the text of current product
		currentProductTitle.textContent = chosenProduct.title;
		currentProductPrice.textContent = `$ ${chosenProduct.price}`;
		currentProductImg.src = chosenProduct.colors[0].img;
		currentProductDesc.textContent = chosenProduct.desc;
		console.log(chosenProduct);

		// assigning new colors

		currentProductColors.forEach((color, index) => {
			color.style.backgroundColor = chosenProduct.colors[index].code;
		});
	});
});

/* 
 todo: Variable 'chosenProduct' has been initialized and declared in the global scope and set to the 1st itemn in the array 'products'. 

 todo: Variable 'chosenProduct' within the function scope (aka block scope) will be treated seperately since it has a seperate scope. This LOCALLY SCOPED variable is therefore not accesible from the global scope, 
 
 ! HOWEVER, SINCE THE VARIABLE HAS BEEN RE-ASSIGNED A NEW VALUE BUT (AND NOT RE-INITIALISED AGAIN ...note that "LET" has not been used again), IT  WILL LEAK OUT THE SCOPED VALUE AND WILL CHANGE THE FUTURE VALUE OF GLOBAL SCOPE TO THE NEW VALUE ASSIGNED. 
*/

// Choosing the Shoe Color
currentProductColors.forEach((element, index) => {
	element.addEventListener('click', () => {
		currentProductImg.src = chosenProduct.colors[index].img;
		console.log(chosenProduct);
	});
});

// Choosing the shoe size
currentProductSizes.forEach((element, index) => {
	element.addEventListener('click', () => {
		currentProductSizes.forEach((element) => {
			element.style.backgroundColor = 'black';
			element.style.color = 'lightgray';
		});
		element.style.backgroundColor = 'white';
		element.style.color = 'black';
	});
});
