export const copyingColor = (text) => {
	
	navigator.clipboard.writeText(text).then(
		() => {
			const message = generateMessage('Текст скопирован', './src/assets/images/sucsess.svg', 'sucs');
			setTimeout(() => {message.remove()}, 1000)
		}
	).
	catch(error => {
		console.log(error)
		const message = generateMessage('Текст не скопирован', './src/assets/images/error.svg', 'err')
		setTimeout(() => {message.remove()}, 1000)
	});
}

function generateMessage(text, image, type) {
	const div = document.createElement('div');
	div.classList.add('message', type);
	div.innerHTML = `
	<img src='${image}' alt=''>
	<p>${text}</p>
	`;
	document.body.appendChild(div);
	return div;
}