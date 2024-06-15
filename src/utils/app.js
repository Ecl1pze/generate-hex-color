import { generateColor } from './generateColor.js'
import {copyingColor} from './copyingColor.js'

const text = document.querySelector('.text')
const button = document.querySelector('.button')
const currentColor = document.querySelector('.current-color')


button.addEventListener('click', () => {
	const color = generateColor();
	
	text.style.color = color;
	currentColor.textContent = color;
});

currentColor.addEventListener('click', () => {
	const current = currentColor.textContent;
	copyingColor(current);
})