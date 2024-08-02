import { ranges } from './fleet-numbers.js';

const findRangeLabel = (number) => {
	for (const range of ranges) {
		if (range.min <= number && range.max >= number) {
			return range.label;
		}
	}

	return "idk man";
}

const applyHandler = () => {
	const button = document.getElementById('submit-button');
	const input = document.getElementById('car-number');

	button.addEventListener('click', (event) => {
		event.preventDefault();
		alert(findRangeLabel(parseInt(input.value, 10)));
	});
};

const main = () => {
	applyHandler();
};

main();
