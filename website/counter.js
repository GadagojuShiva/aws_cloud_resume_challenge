// Select the HTML element with the class "counter-number" and store it in the variable 'counter'
const counter = document.querySelector(".counter-number");

// Define an asynchronous function named 'updateCounter'
async function updateCounter() {
    try {
        // Make an asynchronous fetch request to the specified endpoint
        let response = await fetch("https://qrfdaro455gqfagi4b25ubgxmy0lezan.lambda-url.us-east-1.on.aws/"); // Replace with the correct endpoint

        // Parse the response body as JSON and store it in the variable 'data'
        let data = await response.json();

        // Update the content of the 'counter' element with the retrieved data
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        // If an error occurs during the fetch or JSON parsing, log the error to the console
        console.error("Error fetching data:", error);

        // Update the content of the 'counter' element with an error message
        counter.innerHTML = "Couldn't retrieve views";
    }
}

// Call the 'updateCounter' function to initiate the data fetching and updating process
updateCounter();
