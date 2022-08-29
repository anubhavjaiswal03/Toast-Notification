const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messageType = ['special', 'info', 'warning', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
	const notif = document.createElement('div');
	notif.classList.add('toast');

	if (type === null) {
		type = getRandom(messageType);
	}

	if (message === null) {
		message = `Some ${type} message.`;
	}

	notif.classList.add(type);
	notif.innerText = message;
	// console.log(type, message);

	toasts.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}

function getRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
