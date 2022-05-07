const readProgress = document.querySelector('.read-progress');
const wrapper = document.querySelector('.wrapper');
let value = 0;

function calculate(pageHeight) {
	return Math.floor((100 * value) / pageHeight);
}

window.addEventListener('scroll', function (e) {
	// value = window.scrollY;
	value = window.scrollY;
	console.log(`value: ${value}px - ${calculate(document.body.clientHeight)}%`);

	if (value > 0) {
		readProgress.classList.add('read-progress--show');
		wrapper.classList.add('wrapper-margin--add');
		readProgress.setAttribute('value', calculate(document.body.clientHeight));
	} else {
		readProgress.classList.remove('read-progress--show');
		wrapper.classList.remove('wrapper-margin--add');
	}
});
