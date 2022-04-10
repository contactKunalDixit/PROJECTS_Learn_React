const wrapper = document.querySelector('.sliderWrapper');

const menuItems = document.querySelectorAll('.menuItem');

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

let chosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelector('.color');
const currentProductSize = document.querySelector('.size');
const currentProductDesc = document.querySelector('.productDesc');

console.dir(currentProductTitle);
menuItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		console.log('You CLicked' + ' ' + index);
		// change the current slide
		wrapper.style.transform = `translateX(${-100 * index}vw)`;

		// change the chosen product
		let chosenProduct = products[index];

		// change the text of current product
		currentProductTitle.textContent = chosenProduct.title;
		currentProductPrice.textContent = `$ ${chosenProduct.price}`;
		currentProductImg.src = chosenProduct.colors[0].img;
		currentProductDesc.textContent = chosenProduct.desc;
	});
});
