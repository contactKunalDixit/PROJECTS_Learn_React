const wrapper = document.querySelector('.sliderWrapper');

const menuItems = document.querySelectorAll('.menuItem');
console.log(menuItems);
console.log(wrapper);

menuItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		console.log('You CLicked' + ' ' + index);
		wrapper.style.transform = `translateX(${-100 * index}vw)`;
	});
});
