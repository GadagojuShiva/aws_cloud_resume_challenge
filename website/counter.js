// const counter = document.querySelector(".counter-number");
// async function updateCounter() {
// 	let response = await fetch("https://qrfdaro455gqfagi4b25ubgxmy0lezan.lambda-url.us-east-1.on.aws/");
// 	let data = await response.json();
// 	counter.innerHTML = `Views: $[data]`;
// }
// updateCounter();

const counter = document.querySelector(".counter-number");

async function updateCounter() {
	try {
		let response = await fetch("https://qrfdaro455gqfagi4b25ubgxmy0lezan.lambda-url.us-east-1.on.aws/"); // Replace with the correct endpoint
		let data = await response.json();
		counter.innerHTML = `Views: ${data}`;
	} catch (error) {
		console.error("Error fetching data:", error);
		counter.innerHTML = "Couldn't retrieve views";
	}
}

updateCounter();
